<template>
  <SelectItem v-model="locale" :items="SUPPORT_LANGUAGES">{{ $t('preferences.general.language') }}</SelectItem>
  <SwitchItem v-model="dynamicTitle">{{ $t('preferences.general.dynamicTitle') }}</SwitchItem>
  <SwitchItem v-model="watermark">{{ $t('preferences.general.watermark') }}</SwitchItem>
  <InputItem v-if="watermark" v-model="watermarkContent" :placeholder="$t('preferences.general.watermarkContent')">
    {{ $t('preferences.general.watermarkContent') }}
  </InputItem>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

import InputItem from '../InputItem.vue';
import SelectItem from '../SelectItem.vue';
import SwitchItem from '../SwitchItem.vue';

import { SUPPORT_LANGUAGES } from '@/constants';

const locale = defineModel<string>('locale');
const dynamicTitle = defineModel<boolean>('dynamicTitle');
const watermark = defineModel<boolean>('watermark');
const watermarkContent = defineModel<string>('watermarkContent');

watch(
  () => watermark.value,
  newVal => {
    if (!newVal) {
      watermarkContent.value = '';
    }
  },
);
</script>
