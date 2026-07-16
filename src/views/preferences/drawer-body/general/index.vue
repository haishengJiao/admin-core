<template>
  <div>
    <Block :title="$t('preferences.general.title')">
      <General
        v-model:dynamic-title="general.general.dynamicTitle"
        v-model:locale="general.general.locale"
        v-model:watermark="general.general.watermark"
        v-model:watermark-content="general.general.watermarkContent"
      />
    </Block>
    <Block :title="$t('preferences.general.animation.title')">
      <Animation
        v-model:enable="general.animation.enable"
        v-model:loading="general.animation.loading"
        v-model:name="general.animation.name"
        v-model:progress="general.animation.progress"
      />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import General from './General.vue';
import Block from '../Block.vue';
import Animation from './Animation.vue';

import { usePreferencesStore } from '@/store';

const { general } = storeToRefs(usePreferencesStore());
</script>
