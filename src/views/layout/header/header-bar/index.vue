<template>
  <header
    class="bg-header border-border text-text-body flex items-center justify-between border-b px-2 transition-all duration-300"
    :class="{ dark: darkHeader && isLight }"
    style="height: 50px"
  >
    <div></div>
    <div class="flex items-center gap-1">
      <PreferencesSet />
      <ThemeSwitcher v-model="appearance.theme.mode" :is-dark="isDark" />
      <LanguagePopover v-model="general.general.locale" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { usePreferencesStore } from '@/store';
import ThemeSwitcher from '@/views/preferences/drawer-body/appearance/ThemeToggle.vue';
import LanguagePopover from '@/views/preferences/drawer-body/general/LanguagePopover.vue';
import PreferencesSet from '@/views/preferences/index.vue';

const { appearance, isLight, isDark, general } = storeToRefs(usePreferencesStore());

const darkHeader = computed(() => appearance.value.theme.darkHeader);
</script>
