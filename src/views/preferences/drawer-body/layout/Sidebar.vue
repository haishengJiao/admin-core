<template>
  <SwitchItem v-model="enable" :disabled="disabled">{{ $t('preferences.layout.sidebar.enable') }}</SwitchItem>
  <SwitchItem v-model="draggable" :disabled="!enable || disabled">
    {{ $t('preferences.layout.sidebar.draggable') }}
  </SwitchItem>
  <SwitchItem v-model="collapsed" :disabled="!enable || disabled">
    {{ $t('preferences.layout.sidebar.collapsed') }}
  </SwitchItem>
  <InputNumberItem
    v-model="width"
    :disabled="!enable || disabled"
    :max="SIDEBAR_MAX_WIDTH"
    :min="SIDEBAR_MIN_WIDTH"
    :precision="0"
  >
    {{ $t('preferences.layout.sidebar.width') }}
  </InputNumberItem>
</template>

<script lang="ts" setup>
import InputNumberItem from '../InputNumberItem.vue';
import SwitchItem from '../SwitchItem.vue';

import { SIDEBAR_MIN_WIDTH, SIDEBAR_MAX_WIDTH } from '@/constants';

interface Props {
  disabled?: boolean;
}

defineProps<Props>();

const enable = defineModel<boolean>('enable');
const draggable = defineModel<boolean>('draggable');
const collapsed = defineModel<boolean>('collapsed');
const width = defineModel<number>('width');
</script>
