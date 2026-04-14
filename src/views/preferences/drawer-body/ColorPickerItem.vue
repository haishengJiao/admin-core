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
      <el-color-picker
        v-model="color"
        color-format="hex"
        :disabled="disabled"
        popper-class="[&_.el-color-picker-panel\_\_footer_.el-color-footer\_\_link-btn]:hidden!"
        :predefine="predefine"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

import type { ColorPickerItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false, predefine = [] } = defineProps<ColorPickerItemProps>();
const color = defineModel<string>();

watch(
  () => color.value,
  (newVal, oldVal) => {
    if (!newVal) {
      color.value = oldVal;
    }
  },
);
</script>
