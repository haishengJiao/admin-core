<template>
  <SwitchItem v-model="themeToggle">{{ $t('preferences.layout.widget.themeToggle') }}</SwitchItem>
  <SwitchItem v-model="languageToggle">{{ $t('preferences.layout.widget.languageToggle') }}</SwitchItem>
  <SwitchItem v-model="sidebarToggle">{{ $t('preferences.layout.widget.sidebarToggle') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const themeToggle = defineModel<boolean>('themeToggle');
const languageToggle = defineModel<boolean>('languageToggle');
const sidebarToggle = defineModel<boolean>('sidebarToggle');
</script>
