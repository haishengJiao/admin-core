<template>
  <svg
    aria-hidden="true"
    v-bind="$attrs"
    class="overflow-hidden fill-current stroke-current align-text-top outline-0"
    :style="svgStyle"
  >
    <use :fill="color" :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  name: string;
  color?: string;
  size?: string;
};

defineOptions({
  name: 'CoreSvg',
});

const props = withDefaults(defineProps<Props>(), {
  color: 'currentcolor',
  size: '1em',
});

const symbolId = computed(() => `#svg-${props.name}`);

const svgStyle = computed(() => ({
  width: props.size,
  height: props.size,
}));
</script>
