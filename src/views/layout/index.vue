<template>
  <div class="flex h-full w-full">
    <Transition name="sidebar-fade">
      <LayoutAside v-if="showSidebar" :style="{ width: sidebarWidth }" />
    </Transition>
    <div class="relative flex flex-1 flex-col">
      <el-scrollbar
        ref="mainScrollbar"
        class="flex-1 [&_.el-scrollbar\_\_bar]:z-10!"
        height="100%"
        view-class="flex flex-col h-full"
        wrap-class="main-scrollbar-wrap"
        @end-reached="handleEndReached"
        @scroll="handleScroll"
      >
        <div class="flex h-full flex-col">
          <div class="absolute top-0 z-2 w-full">
            <Transition name="header-fade">
              <LayoutHeader v-if="showHeader" />
            </Transition>
            <Transition name="tabbar-fade">
              <LayoutTabBar v-if="showTabBar" />
            </Transition>
          </div>

          <div
            class="bg-bg-page flex-1 transition-[margin-top] duration-300"
            :class="{ 'overflow-hidden': isFixedHeight }"
            :style="{ marginTop: topOffset }"
          >
            <LayoutMain class="h-full" :class="{ 'mx-auto my-0 max-w-300': isCompact }" />
          </div>

          <Transition name="footer-fade">
            <LayoutFooter v-if="showFooter" :class="{ 'sticky bottom-0': fixedFooter }" />
          </Transition>
        </div>
      </el-scrollbar>

      <Spinner v-if="enableLoading" :spinning="spinning" :style="{ height: spinnerHeight, top: topOffset }" />
    </div>

    <FixedPreferencesButton v-if="fixed" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, useTemplateRef, nextTick, provide, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import LayoutAside from './aside/index.vue';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';
import LayoutTabBar from './tabbar/index.vue';

import type { ScrollbarInstance } from 'element-plus';

import { useMainSpinner } from '@/hooks';
import { usePreferencesStore } from '@/store';
import { SCROLLBAR_KEY } from '@/types';
import { usePreferencesPosition } from '@/views/preferences/composables';
import { FixedPreferencesButton } from '@/views/preferences/widgets';

const route = useRoute();
const router = useRouter();
const { layout, isFullContent, isCompact, general } = storeToRefs(usePreferencesStore());
const { fixed } = usePreferencesPosition();
const { spinning } = useMainSpinner();

const showSidebar = computed(() => layout.value.sidebar.enable && !isFullContent.value);
const showHeader = computed(() => layout.value.header.enable && !isFullContent.value);
const showTabBar = computed(() => layout.value.tabbar.enable && !isFullContent.value);
const showFooter = computed(() => layout.value.footer.enable && !isFullContent.value);
const fixedFooter = computed(() => layout.value.footer.fixed);
const enableLoading = computed(() => general.value.animation.loading);

const isFixedHeight = computed(() => {
  const { iframeSrc, selfScroll } = route.meta;
  return !!iframeSrc || !!selfScroll;
});

const sidebarWidth = computed(() => {
  const { width, collapsed } = layout.value.sidebar;
  if (collapsed) {
    return 'calc(var(--spacing) * 15)';
  }
  return `${width}px`;
});

const topHeightParts = computed(() => {
  const parts: string[] = [];

  if (showHeader.value) parts.push('var(--header-height)');

  if (showTabBar.value) parts.push('var(--tabbar-height)');

  return parts;
});

const topOffset = computed(() => {
  const parts = topHeightParts.value;

  return parts.length ? `calc(${parts.join(' + ')})` : '0px';
});

const spinnerHeight = computed(() => {
  const parts = topHeightParts.value;

  return parts.length ? `calc(100vh - ${parts.join(' - ')})` : '100vh';
});

const mainScrollbar = useTemplateRef('mainScrollbar');
const scrollHandlers = new Set<ScrollbarInstance['onScroll']>();
const endReachedHandlers = new Set<ScrollbarInstance['onEnd-reached']>();
const handleScroll: ScrollbarInstance['onScroll'] = params => {
  scrollHandlers.forEach(handler => handler?.(params));
};
const handleEndReached: ScrollbarInstance['onEnd-reached'] = direction => {
  endReachedHandlers.forEach(handler => handler?.(direction));
};
const onScroll = (handler: ScrollbarInstance['onScroll']) => {
  scrollHandlers.add(handler);
  return () => scrollHandlers.delete(handler);
};
const onEndReached = (handler: ScrollbarInstance['onEnd-reached']) => {
  endReachedHandlers.add(handler);
  return () => endReachedHandlers.delete(handler);
};
provide(SCROLLBAR_KEY, {
  scrollbarRef: mainScrollbar,
  onScroll,
  onEndReached,
});

const transitionEnable = computed(() => general.value.animation.enable);
const removeBeforeEach = router.beforeEach(() => {
  if (mainScrollbar.value && mainScrollbar.value.wrapRef) {
    mainScrollbar.value.wrapRef.style.overflow = 'hidden';
  }
});
const removeAfterEach = router.afterEach(() => {
  nextTick(() => {
    if (mainScrollbar.value && mainScrollbar.value.wrapRef) {
      mainScrollbar.value.wrapRef.style.overflow = 'auto';
    }

    if (!transitionEnable.value) {
      mainScrollbar.value?.scrollTo(0, 0);
      mainScrollbar.value?.update();
    }
  });
});

onUnmounted(() => {
  removeBeforeEach();
  removeAfterEach();
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

.header-fade-enter-from,
.header-fade-leave-to,
.tabbar-fade-enter-from,
.tabbar-fade-leave-to,
.footer-fade-enter-from,
.footer-fade-leave-to {
  height: 0;
}

.header-fade-enter-active,
.header-fade-leave-active,
.tabbar-fade-enter-active,
.tabbar-fade-leave-active,
.footer-fade-enter-active,
.footer-fade-leave-active {
  overflow: hidden;
  transition: height 0.3s ease;
}

.header-fade-enter-to,
.header-fade-leave-from {
  height: var(--header-height);
}

.tabbar-fade-enter-to,
.tabbar-fade-leave-from {
  height: var(--tabbar-height);
}

.footer-fade-enter-to,
.footer-fade-leave-from {
  height: var(--footer-height);
}
</style>
