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
      <el-select v-model="select" :disabled="disabled" :placeholder="placeholder" style="width: 165px">
        <el-option
          v-for="item in items"
          :key="item.value"
          :disabled="item.disabled"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SelectItemProps } from '@/views/preferences/types';

const { tip = '', disabled = false, placeholder = '', items = [] } = defineProps<SelectItemProps>();

const select = defineModel<string>();
</script>
