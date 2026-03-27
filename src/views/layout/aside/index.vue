<template>
  <aside
    class="bg-sidebar border-border text-foreground h-full w-[224px] border-r"
    :class="[preferences.theme.darkSidebar && 'dark']"
  >
    侧边栏
  </aside>
</template>

<script setup lang="ts">
import { usePreferencesStore } from '@/store';

const preferences = usePreferencesStore();
</script>
