<template>
  <div class="flex items-center justify-between">
    <div
      v-for="item in themeList"
      :key="item.value"
      class="text-text-regular flex cursor-pointer flex-col items-center"
      @click="modelValue = item.value"
    >
      <div class="py-4! outline" :class="[modelValue === item.value && 'is-active']">
        <CoreSvg class="mx-9! size-5!" :name="item.icon" />
      </div>
      <div class="mt-2 text-xs leading-4">{{ item.label }}</div>
    </div>
  </div>
  <SwitchItem
    v-model="darkSidebar"
    class="mt-4"
    :disabled="modelValue === 'dark'"
    tip="当主题为浅色，布局不为水平菜单或不为内容全屏时可开启"
  >
    深色侧边栏
  </SwitchItem>
  <SwitchItem v-model="darkHeader" :disabled="modelValue === 'dark'" tip="当主题为浅色，布局不为内容全屏时可开启">
    深色顶栏
  </SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

import type { ThemeMode } from '@/store/preferences/types';
import type { ThemeListItem } from '@/views/preferences/types';

const modelValue = defineModel<ThemeMode>({ default: 'system' });
const darkSidebar = defineModel<boolean>('darkSidebar', { default: false });
const darkHeader = defineModel<boolean>('darkHeader', { default: false });

const themeList: ThemeListItem[] = [
  { label: '浅色', value: 'light', icon: 'preferences-light-theme' },
  { label: '深色', value: 'dark', icon: 'preferences-dark-theme' },
  { label: '跟随系统', value: 'system', icon: 'preferences-system-theme' },
];
</script>
