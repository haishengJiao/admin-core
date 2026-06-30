<template>
  <header
    class="bg-header border-border text-text-body flex h-(--header-height) items-center border-b px-2 transition-all duration-300"
    :class="{ dark: darkHeader && isLight }"
  >
    <div>
      <Quick :show-sidebar-toggle="sidebarToggle" />
    </div>
    <div class="flex-1"></div>
    <div class="flex items-center gap-1">
      <Tools :show-language-toggle="languageToggle" :show-theme-toggle="themeToggle" />
      <User class="mr-2 ml-1" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Quick from './Quick.vue';
import Tools from './Tools.vue';
import User from './User.vue';

import { usePreferencesStore } from '@/store';

const { appearance, isLight, layout } = storeToRefs(usePreferencesStore());

const sidebarToggle = computed(() => layout.value.widget.sidebarToggle);
const darkHeader = computed(() => appearance.value.theme.darkHeader);
const themeToggle = computed(() => layout.value.widget.themeToggle);
const languageToggle = computed(() => layout.value.widget.languageToggle);
</script>
