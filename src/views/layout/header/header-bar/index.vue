<template>
  <header
    class="bg-header border-border text-text-body flex h-[50px] items-center justify-between border-b px-2"
    :class="[preferences.theme.darkHeader && 'dark']"
  >
    <div>顶栏</div>
    <div class="flex items-center gap-1">
      <PreferencesSet />
      <ThemeSwitcher v-model="preferences.theme.mode" :is-dark="preferences.isDark" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { usePreferencesStore } from '@/store';
import ThemeSwitcher from '@/views/preferences/drawer-body/appearance/theme-toggle/index.vue';
import PreferencesSet from '@/views/preferences/index.vue';

const preferences = usePreferencesStore();
</script>
