<template>
  <SwitchItem v-model="weakMode">色弱模式</SwitchItem>
  <SwitchItem v-model="grayMode">灰色模式</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../../switch-item.vue';

const weakMode = defineModel<boolean>('weakMode', { default: false });
const grayMode = defineModel<boolean>('grayMode', { default: false });
</script>
