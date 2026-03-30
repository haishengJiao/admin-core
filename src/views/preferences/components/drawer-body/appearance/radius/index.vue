<template>
  <div class="flex gap-3">
    <div
      v-for="item in radiusList"
      :key="item.value"
      class="cursor-pointer outline"
      :class="{ 'is-active': modelValue === item.value }"
      @click="modelValue = item.value"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<string>({ default: '0.5' });

const radiusList = [
  { label: '0', value: '0' },
  { label: '0.25', value: '0.25' },
  { label: '0.5', value: '0.5' },
  { label: '0.75', value: '0.75' },
  { label: '1', value: '1' },
];
</script>
