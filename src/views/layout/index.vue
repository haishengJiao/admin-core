<template>
  <div class="flex h-full w-full overflow-hidden">
    <Transition name="sidebar-fade">
      <LayoutAside v-if="showSidebar" :style="{ width: sidebarWidth }" />
    </Transition>

    <div class="flex flex-1 flex-col overflow-hidden">
      <el-scrollbar
        ref="mainScrollbar"
        class="[&_.el-scrollbar\_\_bar]:z-10!"
        height="100%"
        :view-style="viewStyle"
        wrap-class="main-scrollbar-wrap"
        @end-reached="handleEndReached"
        @scroll="handleScroll"
      >
        <div class="sticky top-0 z-2 w-full">
          <LayoutHeader v-if="showHeader" />

          <LayoutTabBar v-if="showTabBar" />
        </div>

        <LayoutMain :style="mainStyle" />

        <LayoutFooter v-if="showFooter" :class="footerClass" />
      </el-scrollbar>
    </div>

    <FixedPreferencesButton v-if="fixed" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, watch, useTemplateRef, nextTick, watchEffect, provide } from 'vue';
import { useRoute } from 'vue-router';

import LayoutAside from './aside/index.vue';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';
import LayoutTabBar from './tabbar/index.vue';

import type { ScrollbarInstance } from 'element-plus';
import type { CSSProperties } from 'vue';

import { usePreferencesStore } from '@/store';
import { SCROLLBAR_KEY } from '@/types';
import { usePreferencesPosition } from '@/views/preferences/composables';
import { FixedPreferencesButton } from '@/views/preferences/widgets';

const route = useRoute();
const { layout, isFullContent } = storeToRefs(usePreferencesStore());
const { fixed } = usePreferencesPosition();

const showSidebar = computed(() => layout.value.sidebar.enable && !isFullContent.value);
const sidebarWidth = computed(() => {
  const { width, collapsed } = layout.value.sidebar;
  if (collapsed) {
    return 'calc(var(--spacing) * 15)';
  }
  return `${width}px`;
});

const viewStyle: CSSProperties = {
  width: '100%',
  minHeight: '100%',
};
const viewportHeight = computed(() => {
  let height = '100vh';
  const subtractItems: string[] = [];

  if (showFooter.value || (isFixedHeight.value && showFooter.value)) {
    subtractItems.push('var(--footer-height)');
  }

  if (showHeader.value) {
    subtractItems.push('var(--header-height)');
  }

  if (showTabBar.value) {
    subtractItems.push('var(--tabbar-height)');
  }

  if (subtractItems.length > 0) {
    height = `calc(100vh - ${subtractItems.join(' - ')})`;
  }
  return height;
});
const isFixedHeight = computed(() => {
  const { iframeSrc, selfScroll } = route.meta;
  return !!iframeSrc || !!selfScroll;
});
const mainStyle = computed<CSSProperties>(() => {
  const height = viewportHeight.value;
  return isFixedHeight.value ? { height } : { minHeight: height };
});
const mainScrollbar = useTemplateRef('mainScrollbar');
const scrollHandlers = new Set<ScrollbarInstance['onScroll']>();
const endReachedHandlers = new Set<ScrollbarInstance['onEnd-reached']>();
const handleScroll: ScrollbarInstance['onScroll'] = params => {
  scrollHandlers.forEach(handler => handler && handler(params));
};
const handleEndReached: ScrollbarInstance['onEnd-reached'] = direction => {
  endReachedHandlers.forEach(handler => handler && handler(direction));
};
const onScroll = (handler: ScrollbarInstance['onScroll']) => {
  watchEffect(onInvalidate => {
    scrollHandlers.add(handler);
    onInvalidate(() => {
      scrollHandlers.delete(handler);
    });
  });
};
const onEndReached = (handler: ScrollbarInstance['onEnd-reached']) => {
  watchEffect(onInvalidate => {
    endReachedHandlers.add(handler);
    onInvalidate(() => {
      endReachedHandlers.delete(handler);
    });
  });
};
provide(SCROLLBAR_KEY, {
  scrollbarRef: mainScrollbar,
  onScroll,
  onEndReached,
});
watch(
  () => route.path,
  () => {
    nextTick(() => {
      mainScrollbar.value?.scrollTo(0, 0);
      mainScrollbar.value?.update();
    });
  },
);

const showHeader = computed(() => layout.value.header.enable && !isFullContent.value);
const showTabBar = computed(() => layout.value.tabbar.enable && !isFullContent.value);

const showFooter = computed(() => layout.value.footer.enable && !isFullContent.value);
const fixedFooter = computed(() => layout.value.footer.fixed);
const footerClass = computed(() => {
  return {
    'sticky bottom-0': fixedFooter.value,
  };
});
</script>

<style scoped>
.sidebar-fade-enter-from,
.sidebar-fade-leave-to {
  width: 0 !important;
}

.sidebar-fade-enter-active,
.sidebar-fade-leave-active {
  overflow: hidden;
  transition: width 0.3s ease !important;
}

.sidebar-fade-enter-to,
.sidebar-fade-leave-from {
  width: v-bind('sidebarWidth') !important;
}
</style>
