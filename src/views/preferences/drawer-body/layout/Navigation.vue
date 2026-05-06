<template>
  <SwitchItem v-model="accordion">侧边导航菜单手风琴模式</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const accordion = defineModel<boolean>('accordion');
</script>
