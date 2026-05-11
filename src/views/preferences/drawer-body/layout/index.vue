<template>
  <div>
    <Block :title="$t('preferences.layout.navigationMenu.title')">
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
