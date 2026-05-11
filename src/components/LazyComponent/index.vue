<template>
  <component :is="component" v-if="isLoaded" />
  <div v-else-if="loadFailed">
    <slot name="error">
      <div class="bg-bg my-2 p-6 text-center transition-all duration-300">
        <div class="mb-4 text-3xl font-semibold tracking-wide">{{ $t('ui.fallback.componentNotFound') }}</div>
        <p class="text-text-regular text-base">{{ $t('ui.fallback.componentNotFoundDesc') }}</p>
      </div>
    </slot>
  </div>
  <div v-else ref="loadTriggerRef">
    <slot>
      <div class="bg-bg my-2 p-6 transition-all duration-300">
        <el-skeleton animated :rows="5" />
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';
import { shallowRef, useTemplateRef, inject, computed } from 'vue';

import type { UseIntersectionObserverOptions } from '@vueuse/core';
import type { Component } from 'vue';

import { SCROLLBAR_KEY } from '@/types/injection-keys';

type Props = {
  loader: () => Promise<{ default: Component }>;
  options?: UseIntersectionObserverOptions;
};

const props = defineProps<Props>();

const loadTriggerRef = useTemplateRef('loadTriggerRef');
const isLoaded = shallowRef(false);
const loadFailed = shallowRef(false);
const component = shallowRef<Component>();

const scrollbar = inject(SCROLLBAR_KEY);

const scrollRoot = computed(() => {
  return scrollbar?.scrollbarRef.value?.wrapRef ?? null;
});

const loadComponent = async () => {
  try {
    const module = await props.loader();
    component.value = module.default;
    isLoaded.value = true;
    loadFailed.value = false;
  } catch (err) {
    console.error('组件加载失败：', err);
    loadFailed.value = true;
  }
};

useIntersectionObserver(
  loadTriggerRef,
  async ([{ isIntersecting }]) => {
    if (isIntersecting && !isLoaded.value && !loadFailed.value) {
      await loadComponent();
    }
  },
  {
    root: scrollRoot,
    ...props.options,
  },
);
</script>
