<template>
  <div>
    <Block :title="$t('preferences.appearance.theme')">
      <ThemePanel
        v-model="appearance.theme.mode"
        v-model:dark-header="appearance.theme.darkHeader"
        v-model:dark-sidebar="appearance.theme.darkSidebar"
        :disabled="isFullContent"
      />
    </Block>
    <Block :title="$t('preferences.appearance.primaryColor.title')">
      <PrimaryColor v-model="appearance.primaryColor.color" v-model:type="appearance.primaryColor.type" />
    </Block>
    <Block :title="$t('preferences.appearance.secondaryColor')">
      <SecondaryColor
        v-model:danger="appearance.secondaryColor.danger"
        v-model:error="appearance.secondaryColor.error"
        v-model:info="appearance.secondaryColor.info"
        v-model:success="appearance.secondaryColor.success"
        v-model:warning="appearance.secondaryColor.warning"
      />
    </Block>
    <Block :title="$t('preferences.appearance.radius')">
      <Radius v-model="appearance.radius" />
    </Block>
    <Block :title="$t('preferences.appearance.fontSize')">
      <FontSize v-model="appearance.fontSize" />
    </Block>
    <Block :title="$t('preferences.appearance.other')">
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

const { appearance, isFullContent } = storeToRefs(usePreferencesStore());
</script>
