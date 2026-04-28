<template>
  <div>
    <Block title="通用">
      <General v-model:dynamic-title="general.general.dynamicTitle" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import General from './General.vue';
import Block from '../Block.vue';

import { usePreferencesStore } from '@/store';

const { general } = storeToRefs(usePreferencesStore());
</script>
