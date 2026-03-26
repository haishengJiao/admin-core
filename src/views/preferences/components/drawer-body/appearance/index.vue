<template>
  <div>
    <Block title="主题">
      <ThemePanel
        v-model="preferences.theme.mode"
        v-model:dark-header="preferences.theme.darkHeader"
        v-model:dark-sidebar="preferences.theme.darkSidebar"
      />
    </Block>
    <Block title="其他">
      <ColorMode v-model:gray-mode="preferences.theme.grayMode" v-model:weak-mode="preferences.theme.weakMode" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import Block from '../block.vue';
import ColorMode from './color-mode/index.vue';
import ThemePanel from './theme-panel/index.vue';

import { usePreferencesStore } from '@/store';

const preferences = usePreferencesStore();
</script>
