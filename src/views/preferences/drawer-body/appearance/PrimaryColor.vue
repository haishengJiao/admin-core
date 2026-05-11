<template>
  <div class="flex flex-wrap justify-between">
    <div
      v-for="item in colorPrimaryList"
      :key="item.type"
      class="flex cursor-pointer flex-col items-center"
      @click="handleChangeBrand(item)"
    >
      <PrimaryColorItem v-model="modelValue" v-model:type="type" :item="item" />
      <div class="text-text-regular my-2 text-xs leading-4">{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import PrimaryColorItem from './PrimaryColorItem.vue';

import type { ColorPrimaryType } from '@/store/preferences/types';
import type { colorPrimaryItem } from '@/views/preferences/types';
import type { ComputedRef } from 'vue';

const modelValue = defineModel<string>();
const type = defineModel<ColorPrimaryType>('type');

const { t } = useI18n();

const colorPrimaryList: ComputedRef<colorPrimaryItem[]> = computed(() => {
  return [
    {
      color: '#006ae4',
      type: 'default',
      name: t('preferences.appearance.primaryColor.default'),
    },
    {
      color: '#7166f0',
      type: 'violet',
      name: t('preferences.appearance.primaryColor.violet'),
    },
    {
      color: '#e84a6c',
      type: 'pink',
      name: t('preferences.appearance.primaryColor.pink'),
    },
    {
      color: '#efbd49',
      type: 'yellow',
      name: t('preferences.appearance.primaryColor.yellow'),
    },
    {
      color: '#4e69fd',
      type: 'sky-blue',
      name: t('preferences.appearance.primaryColor.skyBlue'),
    },
    {
      color: '#0bd092',
      type: 'green',
      name: t('preferences.appearance.primaryColor.green'),
    },
    {
      color: '#3f3f46',
      type: 'zinc',
      name: t('preferences.appearance.primaryColor.zinc'),
    },
    {
      color: '#0d9496',
      type: 'deep-green',
      name: t('preferences.appearance.primaryColor.deepGreen'),
    },
    {
      color: '#0960be',
      type: 'deep-blue',
      name: t('preferences.appearance.primaryColor.deepBlue'),
    },
    {
      color: '#c1420b',
      type: 'orange',
      name: t('preferences.appearance.primaryColor.orange'),
    },
    {
      color: '#bb1b1b',
      type: 'rose',
      name: t('preferences.appearance.primaryColor.rose'),
    },
    {
      color: '#000000',
      type: 'custom',
      name: t('preferences.appearance.primaryColor.custom'),
    },
  ];
});

const handleChangeBrand = (item: colorPrimaryItem) => {
  if (type.value === item.type) return;
  modelValue.value = item.color;
  type.value = item.type;
};
</script>
