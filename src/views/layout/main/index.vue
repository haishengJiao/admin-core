<template>
  <main class="bg-bg-page relative overflow-hidden transition-colors duration-300">
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

    <Spinner v-if="enableLoading" :spinning="spinning" :style="{ height: spinnerHeight }" />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import IFrameView from '../iframe/index.vue';

import { useMainSpinner } from '@/hooks/index.ts';
import { usePreferencesStore } from '@/store';

const route = useRoute();
const { spinning } = useMainSpinner();

const { general, layout } = storeToRefs(usePreferencesStore());

const transitionEnable = computed(() => general.value.animation.enable);
const transitionName = computed(() => general.value.animation.name);
const enableLoading = computed(() => general.value.animation.loading);
const showHeader = computed(() => layout.value.header.enable);

const spinnerHeight = computed(() => {
  let height = '100vh';
  const subtractItems: string[] = ['var(--tabbar-height)'];

  if (showHeader.value) {
    subtractItems.push('var(--header-height)');
  }

  if (subtractItems.length > 0) {
    height = `calc(100vh - ${subtractItems.join(' - ')})`;
  }
  return height;
});
</script>
