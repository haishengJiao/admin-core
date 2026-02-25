<template>
  <svg aria-hidden="true" v-bind="$attrs" class="h-[1em] w-[1em] overflow-hidden fill-current stroke-current align-text-top">
    <use :fill="color" :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  name: string;
  color?: string;
};

defineOptions({
  name: 'CoreSvg',
});

const props = withDefaults(defineProps<Props>(), {
  color: '#333',
});
const symbolId = computed(() => `#svg-${props.name}`);
</script>
