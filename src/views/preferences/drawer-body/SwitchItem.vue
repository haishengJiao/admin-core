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
      <el-switch v-model="checked" :disabled="disabled" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SwitchItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false } = defineProps<SwitchItemProps>();

const checked = defineModel<boolean>();
</script>
