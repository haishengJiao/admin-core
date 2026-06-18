<template>
  <div
    class="bg-fill text-text-body/60 hover:text-text-body hover:bg-fill-dark cursor-pointer rounded-sm p-1"
    @click="handleCollapse"
  >
    <CoreSvg v-if="modelValue" name="preferences-sidebar-unfold" />
    <CoreSvg v-else name="preferences-sidebar-fold" />
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<boolean>();

const handleCollapse = () => {
  modelValue.value = !modelValue.value;
};
</script>
