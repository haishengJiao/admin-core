<template>
  <div class="border-border flex items-center justify-between border-b px-4 py-3">
    <div class="flex items-end">
      <span class="text-foreground font-medium">偏好设置</span>
      <span class="text-muted-foreground ml-1 text-xs">自定义偏好设置 & 实时预览</span>
    </div>
    <div class="flex items-center gap-1">
      <div
        class="hover:text-accent-foreground text-foreground/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-150 ease-in-out"
        :class="[!isDirty && 'cursor-not-allowed! opacity-50', isDirty && 'hover:bg-accent']"
        @click="handleReset"
      >
        <CoreSvg v-if="!isDirty" name="preferences-reset" />
        <el-tooltip v-else content="数据有变化，点击可进行重置" effect="light" :offset="10">
          <el-badge class="flex! h-full w-full! items-center justify-center" is-dot :offset="[-4, 4]" type="primary">
            <CoreSvg name="preferences-reset" />
          </el-badge>
        </el-tooltip>
      </div>
      <div
        class="hover:bg-accent hover:text-accent-foreground text-foreground/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-150 ease-in-out"
        @click="handleChangeNavFixed"
      >
        <el-tooltip
          v-if="!preferences.general.enableStickyPreferencesNavigationBar"
          content="开启首选项导航栏吸顶效果"
          effect="light"
          :offset="10"
        >
          <CoreSvg name="preferences-pin" />
        </el-tooltip>
        <el-tooltip v-else content="关闭首选项导航栏吸顶效果" effect="light" :offset="10">
          <CoreSvg name="preferences-unpin" />
        </el-tooltip>
      </div>
      <div
        class="hover:bg-accent hover:text-accent-foreground text-foreground/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium opacity-80 transition-[opacity,background-color,color] duration-150 ease-in-out hover:opacity-100!"
        @click="handleClose"
      >
        <CoreSvg name="preferences-cross-mark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import type { DrawerHeaderEmits } from '../../types';

import { basePreferencesState, usePreferencesStore } from '@/store';

const emits = defineEmits<DrawerHeaderEmits>();

const preferences = usePreferencesStore();

const baseStateStr = JSON.stringify(basePreferencesState());

const isDirty = computed(() => {
  return JSON.stringify(preferences.$state) !== baseStateStr;
});

const handleReset = () => {
  if (!isDirty.value) return;
  preferences.$reset();
};

const handleChangeNavFixed = () => {
  preferences.general.enableStickyPreferencesNavigationBar = !preferences.general.enableStickyPreferencesNavigationBar;
};

const handleClose = () => {
  emits('close');
};
</script>
