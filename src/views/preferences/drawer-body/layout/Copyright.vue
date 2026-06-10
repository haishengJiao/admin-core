<template>
  <SwitchItem v-model="enable" :disabled="disabled">{{ $t('preferences.layout.copyright.enable') }}</SwitchItem>
  <InputItem v-model="companyName" :disabled="itemDisabled">
    {{ $t('preferences.layout.copyright.companyName') }}
  </InputItem>
  <InputItem v-model="companySiteLink" :disabled="itemDisabled">
    {{ $t('preferences.layout.copyright.companySiteLink') }}
  </InputItem>
  <InputItem v-model="date" :disabled="itemDisabled">{{ $t('preferences.layout.copyright.date') }}</InputItem>
  <InputItem v-model="icp" :disabled="itemDisabled">{{ $t('preferences.layout.copyright.icp') }}</InputItem>
  <InputItem v-model="icpLink" :disabled="itemDisabled">{{ $t('preferences.layout.copyright.icpLink') }}</InputItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import InputItem from '../InputItem.vue';
import SwitchItem from '../SwitchItem.vue';

const props = defineProps<{ disabled: boolean }>();

const enable = defineModel<boolean>('enable');
const companyName = defineModel<string>('companyName');
const companySiteLink = defineModel<string>('companySiteLink');
const date = defineModel<string>('date');
const icp = defineModel<string>('icp');
const icpLink = defineModel<string>('icpLink');

const itemDisabled = computed(() => props.disabled || !enable.value);
</script>
