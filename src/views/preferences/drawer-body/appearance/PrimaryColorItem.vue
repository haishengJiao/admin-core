<template>
  <el-popover
    v-if="item.type === 'custom'"
    placement="left"
    popper-class="p-0!"
    trigger="click"
    width="auto"
    @show="handlePopoverShow"
  >
    <template #reference>
      <div class="outline" :class="[type === item.type && 'is-active']">
        <CoreSvg class="mx-9! my-2 size-5!" name="preferences-custom" />
      </div>
    </template>
    <el-color-picker-panel
      ref="colorPickerPanelRef"
      :border="false"
      color-format="hex"
      :model-value="modelValue"
      @update:model-value="handleColorChange"
    />
  </el-popover>
  <div v-else class="outline" :class="[type === item.type && 'is-active']">
    <div class="mx-9 my-2 size-5 rounded-md" :style="{ backgroundColor: item.color }"></div>
  </div>
</template>

<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core';
import { useTemplateRef } from 'vue';

import type { ColorPrimaryType } from '@/store/preferences/types';
import type { colorPrimaryItem } from '@/views/preferences/types';

defineProps<{ item: colorPrimaryItem }>();
const modelValue = defineModel<string>();
const type = defineModel<ColorPrimaryType>('type');

const handleColorChange = useThrottleFn(
  value => {
    modelValue.value = value;
  },
  300,
  true,
);

const colorPickerPanel = useTemplateRef('colorPickerPanelRef');

const handlePopoverShow = () => {
  if (type.value === 'custom') {
    colorPickerPanel.value?.update();
  }
};
</script>
