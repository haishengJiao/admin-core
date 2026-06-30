<template>
  <SwitchItem v-model="enable">{{ $t('preferences.layout.header.enable') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const enable = defineModel<boolean>('enable');
</script>
