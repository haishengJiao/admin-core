<template>
  <aside
    class="bg-sidebar border-border text-text-body flex h-full w-[224px] flex-col border-r transition-all duration-300"
    :class="[preferences.theme.darkSidebar && 'dark']"
  >
    <div class="h-[50px]"></div>
    <div class="flex-1 overflow-hidden py-2">
      <el-scrollbar height="100%">
        <div class="px-2">
          <Menu />
        </div>
      </el-scrollbar>
    </div>
    <div class="h-[42px]"></div>
  </aside>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue';

import { usePreferencesStore } from '@/store';

const preferences = usePreferencesStore();
</script>
