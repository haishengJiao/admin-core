<template>
  <SwitchItem v-model="themeToggle">{{ $t('preferences.layout.widget.themeToggle') }}</SwitchItem>
  <SwitchItem v-model="languageToggle">{{ $t('preferences.layout.widget.languageToggle') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const themeToggle = defineModel<boolean>('themeToggle');
const languageToggle = defineModel<boolean>('languageToggle');
</script>
