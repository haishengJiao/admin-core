<template>
  <SwitchItem v-model="enable">{{ $t('preferences.layout.tabbar.enable') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const enable = defineModel<boolean>('enable');
</script>
