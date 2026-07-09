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
        <CoreSvg class="ml-1 size-3! cursor-help" name="preferences-question" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { ContentWide, ContentCompact } from '../../icons';

import type { ContentType } from '@/store';
import type { Component } from 'vue';

const modelValue = defineModel<ContentType>({ default: 'wide' });

const { t } = useI18n();

interface PresetItem {
  name: string;
  type: ContentType;
}

const components: Record<ContentType, Component> = {
  wide: ContentWide,
  compact: ContentCompact,
};

const PRESET = computed((): PresetItem[] => [
  {
    name: t('preferences.layout.content.wide'),
    type: 'wide',
  },
  {
    name: t('preferences.layout.content.compact'),
    type: 'compact',
  },
]);
</script>
