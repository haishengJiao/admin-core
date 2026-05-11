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
    :tip="$t('preferences.appearance.darkSidebarTip')"
  >
    {{ $t('preferences.appearance.darkSidebar') }}
  </SwitchItem>
  <SwitchItem v-model="darkHeader" :disabled="modelValue === 'dark'" :tip="$t('preferences.appearance.darkHeaderTip')">
    {{ $t('preferences.appearance.darkHeader') }}
  </SwitchItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import SwitchItem from '../SwitchItem.vue';

import type { ThemeMode } from '@/store/preferences/types';
import type { ThemeListItem } from '@/views/preferences/types';
import type { ComputedRef } from 'vue';

const modelValue = defineModel<ThemeMode>({ default: 'system' });
const darkSidebar = defineModel<boolean>('darkSidebar', { default: false });
const darkHeader = defineModel<boolean>('darkHeader', { default: false });

const { t } = useI18n();

const themeList: ComputedRef<ThemeListItem[]> = computed(() => {
  return [
    { label: t('preferences.appearance.light'), value: 'light', icon: 'preferences-light-theme' },
    { label: t('preferences.appearance.dark'), value: 'dark', icon: 'preferences-dark-theme' },
    { label: t('preferences.appearance.followSystem'), value: 'system', icon: 'preferences-system-theme' },
  ];
});
</script>
