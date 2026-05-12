<template>
  <component :is="icon" v-if="isComponent" v-bind="attrs" />
  <img v-else-if="isRemoteIcon" alt="" :src="icon as string" v-bind="attrs" />
  <CoreSvg v-else-if="isSvg" :name="(icon as string).replace('#svg-', '')" v-bind="attrs" />
  <i v-else-if="isFontIcon" class="iconfont" :class="icon" v-bind="attrs"></i>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

import type { RouteMeta } from 'vue-router';

import { isFunction, isHttpUrl, isObject, isString } from '@/utils';

type Props = {
  icon: RouteMeta['icon'];
};

const { icon = '' } = defineProps<Props>();
const attrs = useAttrs();

const isComponent = computed(() => {
  return !isString(icon) && (isFunction(icon) || isObject(icon));
});

const isRemoteIcon = computed(() => {
  return isString(icon) && isHttpUrl(icon);
});

const isSvg = computed(() => {
  return isString(icon) && (icon as string).startsWith('#svg-');
});

const isFontIcon = computed(() => {
  return isString(icon) && (icon as string).startsWith('icon-');
});
</script>
