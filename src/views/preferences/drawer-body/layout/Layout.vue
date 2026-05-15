<template>
  <div class="flex flex-wrap items-center gap-5">
    <div
      v-for="item in PRESET"
      :key="item.type"
      class="text-text-regular flex w-25 cursor-pointer flex-col items-center"
      @click="modelValue = item.type"
    >
      <div class="outline" :class="[modelValue === item.type && 'is-active']">
        <div class="h-16.5! w-full!">
          <component :is="components[item.type]" />
        </div>
      </div>
      <div class="mt-2 flex items-center text-xs leading-4">
        <span>{{ item.name }}</span>
        <el-tooltip :content="item.tip" effect="light" :offset="10">
          <CoreSvg class="ml-1 size-3! cursor-help" name="preferences-question" />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import {
  SidebarNav,
  SidebarMixedNav,
  HeaderNav,
  HeaderSidebarNav,
  MixedNav,
  HeaderMixedNav,
  FullContent,
} from '../../icons';

import type { LayoutType } from '@/store';
import type { Component } from 'vue';

const modelValue = defineModel<LayoutType>({ default: 'sidebar-nav' });

const { t } = useI18n();

interface PresetItem {
  name: string;
  tip: string;
  type: LayoutType;
}

const components: Record<LayoutType, Component> = {
  'sidebar-nav': SidebarNav,
  'sidebar-mixed-nav': SidebarMixedNav,
  'header-nav': HeaderNav,
  'header-sidebar-nav': HeaderSidebarNav,
  'mixed-nav': MixedNav,
  'header-mixed-nav': HeaderMixedNav,
  'full-content': FullContent,
};

const PRESET = computed((): PresetItem[] => [
  {
    name: t('preferences.layout.layout.vertical'),
    tip: t('preferences.layout.layout.verticalTip'),
    type: 'sidebar-nav',
  },
  {
    name: t('preferences.layout.layout.twoColumn'),
    tip: t('preferences.layout.layout.twoColumnTip'),
    type: 'sidebar-mixed-nav',
  },
  {
    name: t('preferences.layout.layout.horizontal'),
    tip: t('preferences.layout.layout.horizontalTip'),
    type: 'header-nav',
  },
  {
    name: t('preferences.layout.layout.headerSidebarNav'),
    tip: t('preferences.layout.layout.headerSidebarNavTip'),
    type: 'header-sidebar-nav',
  },
  {
    name: t('preferences.layout.layout.mixedMenu'),
    tip: t('preferences.layout.layout.mixedMenuTip'),
    type: 'mixed-nav',
  },
  {
    name: t('preferences.layout.layout.headerTwoColumn'),
    tip: t('preferences.layout.layout.headerTwoColumnTip'),
    type: 'header-mixed-nav',
  },
  {
    name: t('preferences.layout.layout.fullContent'),
    tip: t('preferences.layout.layout.fullContentTip'),
    type: 'full-content',
  },
]);
</script>
