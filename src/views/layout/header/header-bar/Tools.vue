<template>
  <PreferencesSet />
  <ThemeToggle v-if="showThemeToggle" v-model="appearance.theme.mode" :is-dark="isDark" />
  <LanguagePopover v-if="showLanguageToggle" v-model="general.general.locale" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { usePreferencesStore } from '@/store';
import PreferencesSet from '@/views/preferences/index.vue';
import { ThemeToggle, LanguagePopover } from '@/views/preferences/widgets';

interface Props {
  showThemeToggle?: boolean;
  showLanguageToggle?: boolean;
}

const { showThemeToggle = false, showLanguageToggle = false } = defineProps<Props>();

const { appearance, isDark, general } = storeToRefs(usePreferencesStore());
</script>
