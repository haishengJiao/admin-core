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
import PrimaryColorItem from './PrimaryColorItem.vue';

import type { ColorPrimaryType } from '@/store/preferences/types';
import type { colorPrimaryItem } from '@/views/preferences/types';

const modelValue = defineModel<string>();
const type = defineModel<ColorPrimaryType>('type');

const colorPrimaryList: colorPrimaryItem[] = [
  {
    color: '#006ae4',
    type: 'default',
    name: '默认',
  },
  {
    color: '#7166f0',
    type: 'violet',
    name: '紫罗兰',
  },
  {
    color: '#e84a6c',
    type: 'pink',
    name: '樱花粉',
  },
  {
    color: '#efbd49',
    type: 'yellow',
    name: '柠檬黄',
  },
  {
    color: '#4e69fd',
    type: 'sky-blue',
    name: '天蓝色',
  },
  {
    color: '#0bd092',
    type: 'green',
    name: '浅绿色',
  },
  {
    color: '#3f3f46',
    type: 'zinc',
    name: '锌色灰',
  },
  {
    color: '#0d9496',
    type: 'deep-green',
    name: '深绿色',
  },
  {
    color: '#0960be',
    type: 'deep-blue',
    name: '深蓝色',
  },
  {
    color: '#c1420b',
    type: 'orange',
    name: '橙黄色',
  },
  {
    color: '#bb1b1b',
    type: 'rose',
    name: '玫瑰红',
  },
  {
    color: '#000000',
    type: 'custom',
    name: '自定义',
  },
];

const handleChangeBrand = (item: (typeof colorPrimaryList)[0]) => {
  if (type.value === item.type) return;
  modelValue.value = item.color;
  type.value = item.type;
};
</script>
