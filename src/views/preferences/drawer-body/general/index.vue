<template>
  <div>
    <Block :title="$t('preferences.general.title')">
      <General v-model:dynamic-title="general.general.dynamicTitle" v-model:locale="general.general.locale" />
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
