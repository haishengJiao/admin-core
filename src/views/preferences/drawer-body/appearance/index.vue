<template>
  <div>
    <Block title="主题">
      <ThemePanel
        v-model="appearance.theme.mode"
        v-model:dark-header="appearance.theme.darkHeader"
        v-model:dark-sidebar="appearance.theme.darkSidebar"
      />
    </Block>
    <Block title="主色">
      <PrimaryColor v-model="appearance.primaryColor.color" v-model:type="appearance.primaryColor.type" />
    </Block>
    <Block title="辅助色">
      <SecondaryColor
        v-model:danger="appearance.secondaryColor.danger"
        v-model:error="appearance.secondaryColor.error"
        v-model:info="appearance.secondaryColor.info"
        v-model:success="appearance.secondaryColor.success"
        v-model:warning="appearance.secondaryColor.warning"
      />
    </Block>
    <Block title="圆角">
      <Radius v-model="appearance.radius" />
    </Block>
    <Block title="字体大小">
      <FontSize v-model="appearance.fontSize" />
    </Block>
    <Block title="其他">
      <ColorMode v-model:gray-mode="appearance.other.grayMode" v-model:weak-mode="appearance.other.weakMode" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import ColorMode from './ColorMode.vue';
import FontSize from './FontSize.vue';
import PrimaryColor from './PrimaryColor.vue';
import Radius from './Radius.vue';
import SecondaryColor from './SecondaryColor.vue';
import ThemePanel from './ThemePanel.vue';

import { usePreferencesStore } from '@/store';

const { appearance } = storeToRefs(usePreferencesStore());
</script>
