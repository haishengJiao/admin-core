<template>
  <aside
    class="bg-sidebar border-border text-text-body h-full w-[224px] border-r transition-all duration-300"
    :class="[preferences.theme.darkSidebar && 'dark']"
  >
    侧边栏
  </aside>
</template>

<script setup lang="ts">
import { usePreferencesStore } from '@/store';

const preferences = usePreferencesStore();
</script>
