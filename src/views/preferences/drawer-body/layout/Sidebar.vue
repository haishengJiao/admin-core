<template>
  <SwitchItem v-model="enable">{{ $t('preferences.layout.sidebar.enable') }}</SwitchItem>
  <SwitchItem v-model="collapsed">{{ $t('preferences.layout.sidebar.collapsed') }}</SwitchItem>
  <InputNumberItem v-model="width">{{ $t('preferences.layout.sidebar.width') }}</InputNumberItem>
</template>

<script lang="ts" setup>
import InputNumberItem from '../InputNumberItem.vue';
import SwitchItem from '../SwitchItem.vue';

const enable = defineModel<boolean>('enable');
const collapsed = defineModel<boolean>('collapsed');
const width = defineModel<number>('width');
</script>
