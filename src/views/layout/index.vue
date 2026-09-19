<template>
  <div class="flex h-full w-full">
    <Transition name="sidebar-fade">
      <LayoutAside v-if="showSidebar" v-show="!isFullContent" :style="{ width: sidebarWidth }" />
    </Transition>
    <div class="relative flex flex-1 flex-col" @mousemove="handleMainMouseMove">
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
          <div
            ref="headerWrapRef"
            class="z-2 w-full transition-all duration-300"
            :class="{
              'shadow-[0_16px_24px_var(--bg)]': scrollY > SCROLL_SHADOW_THRESHOLD,
            }"
            :style="headerStyle"
          >
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
            :style="mainStyle"
          >
            <LayoutMain class="h-full" :class="{ 'mx-auto my-0 max-w-300': isCompact }" />
          </div>

          <Transition name="footer-fade">
            <LayoutFooter v-if="showFooter" v-show="!isFullContent" :class="{ 'sticky bottom-0': fixedFooter }" />
          </Transition>
        </div>
      </el-scrollbar>

      <Spinner v-if="enableLoading" :spinning="spinning" :style="spinnerStyle" />
    </div>

    <FixedPreferencesButton v-if="fixed" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, useTemplateRef, nextTick, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import LayoutAside from './aside/index.vue';
import { useLayoutScroll } from './composables/useLayoutScroll.ts';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';
import LayoutTabBar from './tabbar/index.vue';

import type { CSSProperties } from 'vue';

import { useMainSpinner } from '@/composables';
import { usePreferencesStore } from '@/store';
import { usePreferencesPosition } from '@/views/preferences/composables';
import { FixedPreferencesButton } from '@/views/preferences/widgets';

const SCROLL_SHADOW_THRESHOLD = 20;

const route = useRoute();
const router = useRouter();
const { layout, isFullContent, isCompact, general, isHeaderFixed, isHeaderAuto, isHeaderScroll } =
  storeToRefs(usePreferencesStore());
const { fixed } = usePreferencesPosition();
const { spinning } = useMainSpinner();
const mainScrollbar = useTemplateRef('mainScrollbar');
const { y: scrollY, handleEndReached, handleScroll, lockScroll, unlockScroll } = useLayoutScroll(mainScrollbar);

const showSidebar = computed(() => layout.value.sidebar.enable);
const showHeader = computed(() => layout.value.header.enable);
const showTabBar = computed(() => layout.value.tabbar.enable);
const showFooter = computed(() => layout.value.footer.enable);
const fixedFooter = computed(() => layout.value.footer.fixed);
const enableLoading = computed(() => general.value.animation.loading);
const isHeaderOverlay = computed(() => isHeaderFixed.value || isHeaderAuto.value || isHeaderScroll.value);

const headerWrapRef = useTemplateRef('headerWrapRef');
const headerScrollVisible = ref(true);

const headerHeight = computed(() => {
  const parts: string[] = [];
  if (showHeader.value) parts.push('var(--header-height)');

  if (showTabBar.value) parts.push('var(--tabbar-height)');

  return parts.length ? parts.join(' + ') : '0px';
});
const headerStyle = computed((): CSSProperties => {
  return {
    position: isHeaderOverlay.value || isFullContent.value ? 'absolute' : 'static',
    top: !headerScrollVisible.value || isFullContent.value ? `calc(-1 * (${headerHeight.value}))` : '0px',
  };
});

const mainStyle = computed((): CSSProperties => {
  return {
    marginTop: isHeaderFixed.value && !isFullContent.value ? `calc(${headerHeight.value})` : '0px',
  };
});

const spinnerStyle = computed((): CSSProperties => {
  if (isFullContent.value) {
    return {
      height: '100vh',
      top: '0px',
    };
  }

  const h = `calc(${headerHeight.value})`;

  if (isHeaderFixed.value) {
    return {
      height: `calc(100vh - ${h})`,
      top: `${h}`,
    };
  }

  if (isHeaderAuto.value) {
    if (headerScrollVisible.value) {
      return {
        height: `calc(100vh - ${h})`,
        top: `${h}`,
      };
    }
    return {
      height: '100vh',
      top: '0px',
    };
  }

  const topOffset = `max(0px, calc(${h} - ${scrollY.value}px))`;
  const contentHeight = `min(100vh, calc(100vh - ${h} + ${scrollY.value}px))`;

  return {
    top: topOffset,
    height: contentHeight,
  };
});

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

const transitionEnable = computed(() => general.value.animation.enable);
const removeBeforeEach = router.beforeEach(() => {
  lockScroll();
});
const removeAfterEach = router.afterEach(() => {
  nextTick(() => {
    unlockScroll();
    headerScrollVisible.value = false;

    if (!transitionEnable.value) {
      mainScrollbar.value?.scrollTo(0, 0);
      mainScrollbar.value?.update();
    }
  });
});

const handleMainMouseMove = (e: MouseEvent) => {
  if (!isHeaderAuto.value) return;
  if (headerScrollVisible.value) {
    const threshold = headerWrapRef.value?.offsetHeight ?? 0;
    headerScrollVisible.value = e.clientY <= threshold;
  } else {
    headerScrollVisible.value = e.clientY <= SCROLL_SHADOW_THRESHOLD;
  }
};

const scroll = inject(SCROLLBAR_KEY);

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
