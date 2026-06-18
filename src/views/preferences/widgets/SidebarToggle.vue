<template>
  <div
    class="text-text-body/80 hover:bg-fill hover:text-text-heading flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-lg transition-colors"
    @click="handleChangeSidebar"
  >
    <CoreSvg v-if="modelValue" name="preferences-sidebar-hidden" />
    <CoreSvg v-else name="preferences-sidebar-visible" />
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<boolean>();

const handleChangeSidebar = () => {
  modelValue.value = !modelValue.value;
};
</script>
