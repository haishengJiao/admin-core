<template>
  <header
    class="bg-header border-border text-text-body flex items-center justify-between border-b px-2 transition-all duration-300"
    :class="{ dark: darkHeader && isLight }"
    style="height: 50px"
  >
    <div>
      <Quick />
    </div>
    <div class="flex items-center gap-1">
      <PreferencesSet />
      <ThemeSwitcher v-if="themeToggle" v-model="appearance.theme.mode" :is-dark="isDark" />
      <LanguagePopover v-if="languageToggle" v-model="general.general.locale" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Quick from './Quick.vue';

import { usePreferencesStore } from '@/store';
import ThemeSwitcher from '@/views/preferences/drawer-body/appearance/ThemeToggle.vue';
import LanguagePopover from '@/views/preferences/drawer-body/general/LanguagePopover.vue';
import PreferencesSet from '@/views/preferences/index.vue';

const { appearance, isLight, isDark, general, layout } = storeToRefs(usePreferencesStore());

const darkHeader = computed(() => appearance.value.theme.darkHeader);
const themeToggle = computed(() => layout.value.widget.themeToggle);
const languageToggle = computed(() => layout.value.widget.languageToggle);
</script>
