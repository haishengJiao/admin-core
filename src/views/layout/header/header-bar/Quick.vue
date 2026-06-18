<template>
  <SidebarToggle v-if="showSidebarToggle" v-model="layout.sidebar.enable" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { usePreferencesStore } from '@/store';
import { SidebarToggle } from '@/views/preferences/widgets';

interface Props {
  showSidebarToggle?: boolean;
}

const { showSidebarToggle = false } = defineProps<Props>();

const { layout } = storeToRefs(usePreferencesStore());
</script>
