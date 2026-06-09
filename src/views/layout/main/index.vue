<template>
  <main class="bg-bg-page overflow-hidden transition-all duration-300">
    <template v-if="route.meta.iframeSrc">
      <IFrameView :key="route.path" :src="route.meta.iframeSrc" />
    </template>
    <router-view v-else />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import IFrameView from '../iframe/index.vue';

const route = useRoute();
</script>
