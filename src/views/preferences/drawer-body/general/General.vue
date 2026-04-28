<template>
  <SwitchItem v-model="dynamicTitle">动态标题</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const dynamicTitle = defineModel<boolean>('dynamicTitle');
</script>
