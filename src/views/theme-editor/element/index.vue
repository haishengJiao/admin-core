<template>
  <div class="mx-auto my-2 h-full w-8/12">
    <LazyComponent :loader="() => import('./base/button/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./base/link/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./base/text/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/cascader/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/checkbox/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/date-picker/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/form/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/input/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/radio/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/rate/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/select/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/slider/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/switch/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/time-picker/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/transfer/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./form/upload/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/avatar/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/badge/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/calendar/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/carousel/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/collapse/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/description/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/empty/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/image/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/pagination/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/progress/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/result/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/skeleton/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/table/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/tag/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/timeline/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/tour/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/tree/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/statistic/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./data/segmented/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/anchor/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/backtop/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/breadcrumb/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/dropdown/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/menu/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/page-header/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/steps/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./navigation/tabs/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/alert/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/dialog/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/drawer/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/loading/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/message/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/message-box/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/notification/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/popconfirm/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/popover/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./feedback/tooltip/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./others/divider/index.vue')" :options="lazyOptions" />
    <LazyComponent :loader="() => import('./others/watermark/index.vue')" :options="lazyOptions" />
  </div>
</template>

<script lang="ts" setup>
import type { UseIntersectionObserverOptions } from '@vueuse/core';

type Props = {
  lazyOptions?: UseIntersectionObserverOptions;
};

const { lazyOptions = { rootMargin: '100px 0px' } } = defineProps<Props>();
</script>
