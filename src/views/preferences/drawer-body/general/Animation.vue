<template>
  <SwitchItem v-model="progress">{{ $t('preferences.general.animation.progress') }}</SwitchItem>
  <SwitchItem v-model="loading">{{ $t('preferences.general.animation.loading') }}</SwitchItem>
  <SwitchItem v-model="enable">{{ $t('preferences.general.animation.transition') }}</SwitchItem>
  <div v-if="enable" class="mt-3 mb-2 flex justify-between px-2">
    <div v-for="item in transitionPreset" :key="item">
      <div class="cursor-pointer p-2! outline" :class="{ 'is-active': name === item }" @click="handleChangeName(item)">
        <div class="bg-primary h-10 w-12 rounded-md" :class="`${item}-slow`"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

import type { PageTransitionType } from '@/store';

const progress = defineModel<boolean>('progress');
const loading = defineModel<boolean>('loading');
const enable = defineModel<boolean>('enable');
const name = defineModel<PageTransitionType>('name');

const transitionPreset: PageTransitionType[] = ['fade', 'fade-slide', 'fade-up', 'fade-down'];

const handleChangeName = (item: PageTransitionType) => {
  name.value = item;
};
</script>
