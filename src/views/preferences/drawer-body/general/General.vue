<template>
  <SelectItem v-model="locale" :items="SUPPORT_LANGUAGES">{{ $t('preferences.general.language') }}</SelectItem>
  <SwitchItem v-model="dynamicTitle">{{ $t('preferences.general.dynamicTitle') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SelectItem from '../SelectItem.vue';
import SwitchItem from '../SwitchItem.vue';

import { SUPPORT_LANGUAGES } from '@/constants';

const dynamicTitle = defineModel<boolean>('dynamicTitle');
const locale = defineModel<string>('locale');
</script>
