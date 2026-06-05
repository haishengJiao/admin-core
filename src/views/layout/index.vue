<template>
  <div class="flex h-full w-full overflow-hidden">
    <Transition name="sidebar-fade">
      <LayoutAside v-if="showSidebar" :style="{ width: sidebarwidth }" />
    </Transition>
    <div class="flex flex-1 flex-col overflow-hidden">
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import LayoutAside from './aside/index.vue';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());

const showSidebar = computed(() => layout.value.sidebar.enable);
const sidebarwidth = computed(() => {
  const { width, collapsed } = layout.value.sidebar;
  if (collapsed) {
    return 'calc(var(--spacing) * 15)';
  }
  return `${width}px`;
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
  width: v-bind(sidebarwidth) !important;
}
</style>
