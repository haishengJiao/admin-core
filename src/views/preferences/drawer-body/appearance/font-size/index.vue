<template>
  <div class="flex flex-col gap-2">
    <el-input-number class="w-[80%]!" :max="20" :min="14" :model-value="modelValue" @change="handleChange">
      <template #suffix>
        <span class="text-text-regular text-xs">px</span>
      </template>
    </el-input-number>
    <div class="text-text-regular flex items-center text-xs">
      <span>调整全局字体大小，实时预览效果</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['update:modelValue']);
const modelValue = defineModel<number>({
  default: 16,
});

const handleChange = (currentValue: number | undefined, oldValue: number | undefined) => {
  if (!currentValue) {
    modelValue.value = oldValue || 16;
  }
  emits('update:modelValue', currentValue || oldValue || 16);
};
</script>
