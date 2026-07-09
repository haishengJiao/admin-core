<template>
  <SwitchItem v-model="themeToggle">{{ $t('preferences.layout.widget.themeToggle') }}</SwitchItem>
  <SwitchItem v-model="languageToggle">{{ $t('preferences.layout.widget.languageToggle') }}</SwitchItem>
  <SwitchItem v-model="sidebarToggle">{{ $t('preferences.layout.widget.sidebarToggle') }}</SwitchItem>
  <SelectItem v-model="preferencesButtonPosition" :items="positionItems">
    {{ $t('preferences.layout.widget.position.title') }}
  </SelectItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import SelectItem from '../SelectItem.vue';
import SwitchItem from '../SwitchItem.vue';

import type { PreferencesButtonPositionType } from '@/store';

interface Props {
  isFullContent: boolean;
  showHeader: boolean;
}

const props = defineProps<Props>();
const { t } = useI18n();

const themeToggle = defineModel<boolean>('themeToggle');
const languageToggle = defineModel<boolean>('languageToggle');
const sidebarToggle = defineModel<boolean>('sidebarToggle');
const preferencesButtonPosition = defineModel<PreferencesButtonPositionType>('preferencesButtonPosition');

const positionItems = computed(() => {
  const { showHeader, isFullContent } = props;
  const disabled = isFullContent || !showHeader;

  return [
    { label: t('preferences.layout.widget.position.auto'), value: 'auto' },
    { label: t('preferences.layout.widget.position.header'), value: 'header', disabled },
    { label: t('preferences.layout.widget.position.fixed'), value: 'fixed' },
    { label: t('preferences.layout.widget.position.userDropdown'), value: 'user-dropdown', disabled },
  ];
});
</script>
