<template>
  <main class="bg-bg-page relative overflow-hidden transition-colors duration-300">
    <template v-if="route.meta.iframeSrc">
      <IFrameView :key="route.fullPath" :src="route.meta.iframeSrc" />
    </template>
    <template v-else>
      <RouterView v-slot="{ Component }">
        <Transition v-if="transitionEnable" mode="out-in" :name="transitionName" @enter="handleEnter">
          <component :is="Component" />
        </Transition>
        <component :is="Component" v-else />
      </RouterView>
    </template>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

import IFrameView from '../iframe/index.vue';

import type { BaseTransitionProps } from 'vue';

import { usePreferencesStore } from '@/store';
import { SCROLLBAR_KEY } from '@/types/injection-keys';

const route = useRoute();

const { general } = storeToRefs(usePreferencesStore());

const transitionEnable = computed(() => general.value.animation.enable);
const transitionName = computed(() => general.value.animation.name);

const scrollbar = inject(SCROLLBAR_KEY);
const handleEnter: BaseTransitionProps['onEnter'] = (_el, done) => {
  scrollbar?.scrollbarRef.value?.update();
  scrollbar?.scrollbarRef.value?.scrollTo(0, 0);
  done();
};
</script>
