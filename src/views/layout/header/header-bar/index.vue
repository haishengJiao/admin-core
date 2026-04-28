<template>
  <header
    class="bg-header border-border text-text-body flex items-center justify-between border-b px-2 transition-all duration-300"
    :class="[theme.darkHeader && isLight && 'dark']"
    style="height: 50px"
  >
    <div>顶栏</div>
    <div class="flex items-center gap-1">
      <PreferencesSet />
      <ThemeSwitcher v-model="theme.mode" :is-dark="isDark" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { usePreferencesStore } from '@/store';
import ThemeSwitcher from '@/views/preferences/drawer-body/appearance/theme-toggle/index.vue';
import PreferencesSet from '@/views/preferences/index.vue';

const { theme, isLight, isDark } = storeToRefs(usePreferencesStore());
</script>
