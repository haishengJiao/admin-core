<template>
  <div>
    <Block title="导航菜单">
      <Navigation v-model:accordion="layout.navigation.accordion" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import Navigation from './Navigation.vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());
</script>
