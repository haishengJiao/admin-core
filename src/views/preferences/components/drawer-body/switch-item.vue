<template>
  <div
    class="hover:bg-accent my-1 flex items-center justify-between px-2 py-2.5"
    :class="[disabled && 'pointer-events-none opacity-50']"
  >
    <div class="flex items-center">
      <span class="text-[14px]">
        <slot></slot>
      </span>
      <el-tooltip v-if="tip" :content="tip" effect="light" :offset="10">
        <CoreSvg class="ml-1 size-3! cursor-help" name="preferences-question" />
      </el-tooltip>
    </div>
    <div class="flex">
      <el-switch v-model="checked" class="h-auto!" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SwitchItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false } = defineProps<SwitchItemProps>();

const checked = defineModel<boolean>();
</script>
