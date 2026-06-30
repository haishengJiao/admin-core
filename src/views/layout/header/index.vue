<template>
  <div class="w-full">
    <HeaderBar v-if="showHeader" />
    <TabBar />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from './header-bar/index.vue';
import TabBar from './tab-bar/index.vue';

interface Props {
  showHeader?: boolean;
}

const { showHeader = true } = defineProps<Props>();
</script>
