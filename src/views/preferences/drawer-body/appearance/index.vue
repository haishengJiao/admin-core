<template>
  <div>
    <Block title="主题">
      <ThemePanel
        v-model="theme.mode"
        v-model:dark-header="theme.darkHeader"
        v-model:dark-sidebar="theme.darkSidebar"
      />
    </Block>
    <Block title="主色">
      <PrimaryColor v-model="theme.colorPrimary" v-model:type="theme.colorPrimaryType" />
    </Block>
    <Block title="辅助色">
      <SecondaryColor
        v-model:danger="theme.colorDanger"
        v-model:error="theme.colorError"
        v-model:info="theme.colorInfo"
        v-model:success="theme.colorSuccess"
        v-model:warning="theme.colorWarning"
      />
    </Block>
    <Block title="圆角">
      <Radius v-model="theme.radius" />
    </Block>
    <Block title="字体大小">
      <FontSize v-model="theme.fontSize" />
    </Block>
    <Block title="其他">
      <ColorMode v-model:gray-mode="theme.grayMode" v-model:weak-mode="theme.weakMode" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import ColorMode from './color-mode/index.vue';
import FontSize from './font-size/index.vue';
import PrimaryColor from './primary-color/index.vue';
import Radius from './radius/index.vue';
import SecondaryColor from './secondary-color/index.vue';
import ThemePanel from './theme-panel/index.vue';

import { usePreferencesStore } from '@/store';

const { theme } = storeToRefs(usePreferencesStore());
</script>
