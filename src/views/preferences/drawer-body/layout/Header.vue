<template>
  <SwitchItem v-model="enable" :disabled="disabled">{{ $t('preferences.layout.header.enable') }}</SwitchItem>
  <SelectItem v-model="mode" :disabled="!enable || disabled" :items="modeItems">
    {{ $t('preferences.layout.header.mode.title') }}
  </SelectItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import SelectItem from '../SelectItem.vue';
import SwitchItem from '../SwitchItem.vue';

import type { LayoutHeaderModeType } from '@/store';

interface Props {
  disabled?: boolean;
}

defineProps<Props>();

const { t } = useI18n();

const enable = defineModel<boolean>('enable');
const mode = defineModel<LayoutHeaderModeType>('mode');

const modeItems = computed(() => {
  return [
    { label: t('preferences.layout.header.mode.static'), value: 'static' },
    { label: t('preferences.layout.header.mode.fixed'), value: 'fixed' },
    { label: t('preferences.layout.header.mode.auto'), value: 'auto' },
    { label: t('preferences.layout.header.mode.scroll'), value: 'scroll' },
  ];
});
</script>
