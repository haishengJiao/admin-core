<template>
  <aside
    class="bg-sidebar border-border text-text-body flex h-full flex-col border-r transition-all duration-300"
    :class="{ dark: darkSidebar && isLight, 'w-15!': collapsed }"
    :style="{ width: `${sidebarWidth}px` }"
  >
    <MenuLogo />
    <div class="relative flex-1 overflow-hidden py-2">
      <div
        class="from-bg pointer-events-none absolute top-0 z-10 h-12 w-full bg-linear-to-b to-transparent opacity-0 transition-opacity duration-300 ease-in-out will-change-[opacity]"
        :class="{ 'border-border border-t opacity-100': !isAtTop }"
      ></div>
      <el-scrollbar ref="scrollbarRef" height="100%" @scroll="handleScroll">
        <div class="px-2">
          <Menu />
        </div>
      </el-scrollbar>
      <div
        class="from-bg pointer-events-none absolute bottom-0 z-10 h-12 w-full bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 ease-in-out will-change-[opacity]"
        :class="{ 'border-border border-b opacity-100': !isAtTop && !isAtBottom }"
      ></div>
    </div>
    <div class="flex h-10.5 items-center px-3">
      <SidebarCollapse v-model="layout.sidebar.collapsed" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref, useTemplateRef } from 'vue';

import Menu from './menu/index.vue';
import MenuLogo from './menu-logo/index.vue';
import { SidebarCollapse } from './widgets';

import type { ScrollbarInstance } from 'element-plus';

import { usePreferencesStore } from '@/store';

const { appearance, isLight, layout } = storeToRefs(usePreferencesStore());

const darkSidebar = computed(() => appearance.value.theme.darkSidebar);
const sidebarWidth = computed(() => layout.value.sidebar.width);
const collapsed = computed(() => layout.value.sidebar.collapsed);

const scrollbar = useTemplateRef('scrollbarRef');
const isAtTop = ref(true);
const isAtBottom = ref(true);
const handleScroll: ScrollbarInstance['onScroll'] = scroll => {
  isAtTop.value = scroll.scrollTop <= 0;

  const wrapRef = scrollbar.value?.wrapRef;
  if (wrapRef) {
    const { scrollHeight, clientHeight } = wrapRef;
    isAtBottom.value = scroll.scrollTop + clientHeight >= scrollHeight - 1;
  }
};
</script>
