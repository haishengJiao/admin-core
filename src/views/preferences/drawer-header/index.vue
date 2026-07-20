<template>
  <div class="border-border flex items-center justify-between border-b px-4 py-3">
    <div class="flex items-end">
      <span class="text-text-body font-medium">{{ $t('preferences.title') }}</span>
      <span class="text-text-regular ml-1 max-w-38 truncate text-xs" :title="$t('preferences.subtitle')">
        {{ $t('preferences.subtitle') }}
      </span>
    </div>
    <div class="flex items-center gap-1">
      <div
        class="hover:text-text-heading text-text-body/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-150 ease-in-out"
        :class="[!isModified && 'text-text-disabled! cursor-not-allowed!', isModified && 'hover:bg-fill']"
        @click="handleReset"
      >
        <CoreSvg v-if="!isModified" name="preferences-reset" />
        <el-tooltip v-else :content="$t('preferences.resetTip')" effect="light" :offset="10">
          <el-badge class="flex! h-full w-full! items-center justify-center" is-dot :offset="[-4, 4]" type="primary">
            <CoreSvg name="preferences-reset" />
          </el-badge>
        </el-tooltip>
      </div>
      <div
        class="hover:bg-fill hover:text-text-heading text-text-body/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-150 ease-in-out"
        @click="handleChangeNavFixed"
      >
        <el-tooltip
          v-if="!preferences.app.enableStickyPreferencesNavigationBar"
          :content="$t('preferences.enableStickyPreferencesNavigationBar')"
          effect="light"
          :offset="10"
        >
          <CoreSvg class="stroke-current" name="preferences-pin" />
        </el-tooltip>
        <el-tooltip
          v-else
          :content="$t('preferences.disableStickyPreferencesNavigationBar')"
          effect="light"
          :offset="10"
        >
          <CoreSvg class="stroke-current" name="preferences-unpin" />
        </el-tooltip>
      </div>
      <div
        class="hover:bg-fill hover:text-text-heading text-text-body/80 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium opacity-80 transition-[opacity,background-color,color] duration-150 ease-in-out hover:opacity-100!"
        @click="handleClose"
      >
        <CoreSvg name="preferences-cross-mark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import type { DrawerHeaderEmits } from '../types';

import { usePreferencesStore } from '@/store';

const emits = defineEmits<DrawerHeaderEmits>();

const preferences = usePreferencesStore();
const { isModified } = storeToRefs(preferences);

const handleReset = () => {
  if (!isModified.value) return;
  preferences.$reset();
};

const handleChangeNavFixed = () => {
  preferences.app.enableStickyPreferencesNavigationBar = !preferences.app.enableStickyPreferencesNavigationBar;
};

const handleClose = () => {
  emits('close');
};
</script>
