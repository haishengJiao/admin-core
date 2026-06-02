<template>
  <div>
    <SidebarToggle v-if="sidebarToggle" v-model="layout.sidebar.enable" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { usePreferencesStore } from '@/store';
import SidebarToggle from '@/views/preferences/drawer-body/layout/SidebarToggle.vue';

const { layout } = storeToRefs(usePreferencesStore());

const sidebarToggle = computed(() => layout.value.widget.sidebarToggle);
</script>
