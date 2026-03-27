<template>
  <div class="flex flex-col gap-2">
    <el-input-number v-model="modelValue" class="w-[80%]!" :max="22" :min="12">
      <template #suffix>
        <span class="text-muted-foreground text-xs">px</span>
      </template>
    </el-input-number>
    <div class="text-muted-foreground flex items-center text-xs">
      <span>调整全局字体大小，实时预览效果</span>
      <el-tooltip content="Element Plus 组件不支持" effect="light" :offset="10">
        <CoreSvg class="ml-1 size-2.5! cursor-help" name="preferences-question" />
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<number>({
  default: 16,
});
</script>
