<template>
  <div v-if="isAllowed" v-loading="isLoading" class="relative size-full">
    <iframe ref="iframeRef" class="size-full" frameborder="0" :src="src" @load="handleLoad"></iframe>
  </div>
  <div v-else class="flex size-full items-center justify-center">
    <el-result icon="error" title="禁止加载" />
  </div>
</template>

<script lang="ts" setup>
import { useMutationObserver } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

import type { RouteMeta } from 'vue-router';

type Props = {
  src: Exclude<RouteMeta['iframeSrc'], undefined>;
};

const { src } = defineProps<Props>();

const whitelist = ['https://vueuse.org/', 'https://v7.vite.dev/'];

const isUrlInWhitelist = (url: string) => {
  return whitelist.some(domain => url.startsWith(domain));
};

const isAllowed = ref(isUrlInWhitelist(src));
const iframeRef = useTemplateRef('iframeRef');
useMutationObserver(
  iframeRef,
  mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        const newSrc = (mutation.target as HTMLIFrameElement).src;
        const isNewSrcAllowed = isUrlInWhitelist(newSrc);
        if (isNewSrcAllowed) {
          isLoading.value = true;
          isAllowed.value = true;
        } else {
          isAllowed.value = false;
        }
      }
    });
  },
  {
    attributes: true,
    attributeFilter: ['src'],
    attributeOldValue: true,
  },
);

const isLoading = ref(true);
const handleLoad = () => {
  isLoading.value = false;
};
</script>
