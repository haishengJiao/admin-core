<template>
  <div class="w-full">
    <HeaderBar v-if="showHeader" />
    <TabBar v-if="showTabBar" />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from './header-bar/index.vue';
import TabBar from './tab-bar/index.vue';

interface Props {
  showHeader?: boolean;
  showTabBar?: boolean;
}

const { showHeader = true, showTabBar = true } = defineProps<Props>();
</script>
