<template>
  <SwitchItem v-model="weakMode">{{ $t('preferences.appearance.weakMode') }}</SwitchItem>
  <SwitchItem v-model="grayMode">{{ $t('preferences.appearance.grayMode') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const weakMode = defineModel<boolean>('weakMode', { default: false });
const grayMode = defineModel<boolean>('grayMode', { default: false });
</script>
