<template>
  <PreferencesSet />
  <ThemeSwitcher v-if="showThemeToggle" v-model="appearance.theme.mode" :is-dark="isDark" />
  <LanguagePopover v-if="showLanguageToggle" v-model="general.general.locale" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { usePreferencesStore } from '@/store';
import ThemeSwitcher from '@/views/preferences/drawer-body/appearance/ThemeToggle.vue';
import LanguagePopover from '@/views/preferences/drawer-body/general/LanguagePopover.vue';
import PreferencesSet from '@/views/preferences/index.vue';

interface Props {
  showThemeToggle?: boolean;
  showLanguageToggle?: boolean;
}

const { showThemeToggle = false, showLanguageToggle = false } = defineProps<Props>();

const { appearance, isDark, general } = storeToRefs(usePreferencesStore());
</script>
