<template>
  <div class="py-4">
    <h3 class="mb-3 font-semibold">{{ title }}</h3>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { BlockProps } from '@/views/preferences/types';

defineProps<BlockProps>();
</script>
