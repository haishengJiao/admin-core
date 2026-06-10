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
      <el-input v-model="modelValue" class="w-41.25" v-bind="$attrs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { InputItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false } = defineProps<InputItemProps>();

const modelValue = defineModel<string>();

defineExpose({} as InstanceType<typeof ElInput>);
</script>
