<template>
  <div
    class="hover:bg-fill my-1 flex items-center justify-between px-2 py-1"
    :class="[disabled && 'pointer-events-none opacity-50']"
  >
    <div class="flex items-center">
      <span class="text-sm">
        <slot></slot>
      </span>
      <el-tooltip v-if="tip" :content="tip" effect="light" :offset="10">
        <CoreSvg class="ml-1 size-3! cursor-help" name="preferences-question" />
      </el-tooltip>
    </div>
    <div class="flex">
      <el-input-number
        class="w-41.25"
        :disabled="disabled"
        :max="320"
        :min="160"
        :model-value="modelValue"
        :placeholder="placeholder"
        :precision="0"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { InputNumberItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false, placeholder = '' } = defineProps<InputNumberItemProps>();
const emits = defineEmits(['update:modelValue']);

const modelValue = defineModel<number>();

const handleChange = (currentValue: number | undefined, oldValue: number | undefined) => {
  if (!currentValue) {
    modelValue.value = oldValue || 226;
  }
  emits('update:modelValue', currentValue || oldValue || 226);
};
</script>
