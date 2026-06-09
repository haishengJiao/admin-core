<template>
  <SwitchItem v-model="enable">{{ $t('preferences.layout.footer.enable') }}</SwitchItem>
  <SwitchItem v-model="fixed" :disabled="!enable">{{ $t('preferences.layout.footer.fixed') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const enable = defineModel<boolean>('enable');
const fixed = defineModel<boolean>('fixed');
</script>
