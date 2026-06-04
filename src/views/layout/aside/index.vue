<template>
  <aside
    class="bg-sidebar border-border text-text-body flex h-full flex-col border-r transition-all duration-300"
    :class="{ dark: darkSidebar && isLight, 'w-15!': collapsed }"
    :style="{ width: `${sidebarWidth}px` }"
  >
    <MenuLogo />
    <div class="flex-1 overflow-hidden py-2">
      <el-scrollbar height="100%">
        <div class="px-2">
          <Menu />
        </div>
      </el-scrollbar>
    </div>
    <div class="flex h-10.5 items-center px-3">
      <SidebarCollapse v-model="layout.sidebar.collapsed" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Menu from './menu/index.vue';
import MenuLogo from './menu-logo/index.vue';
import { SidebarCollapse } from './widgets';

import { usePreferencesStore } from '@/store';

const { appearance, isLight, layout } = storeToRefs(usePreferencesStore());

const darkSidebar = computed(() => appearance.value.theme.darkSidebar);
const sidebarWidth = computed(() => layout.value.sidebar.width);
const collapsed = computed(() => layout.value.sidebar.collapsed);
</script>
