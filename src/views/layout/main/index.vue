<template>
  <main class="bg-bg-page overflow-hidden transition-all duration-300">
    <template v-if="route.meta.iframeSrc">
      <IFrameView :key="route.path" :src="route.meta.iframeSrc" />
    </template>
    <template v-else>
      <RouterView v-slot="{ Component }">
        <Transition v-if="transitionEnable" mode="out-in" :name="transitionName">
          <component :is="Component" />
        </Transition>
        <component :is="Component" v-else />
      </RouterView>
    </template>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import IFrameView from '../iframe/index.vue';

import { usePreferencesStore } from '@/store';

const route = useRoute();

const { general } = storeToRefs(usePreferencesStore());

const transitionEnable = computed(() => general.value.animation.enable);
const transitionName = computed(() => general.value.animation.name);
</script>
