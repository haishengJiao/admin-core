<template>
  <div>
    <Block :title="$t('preferences.layout.title')">
      <Layout v-model="layout.layout" />
    </Block>
    <Block :title="$t('preferences.layout.content.title')">
      <Content v-model="layout.content" />
    </Block>
    <Block :title="$t('preferences.layout.navigationMenu.title')">
      <Navigation v-model:accordion="layout.navigation.accordion" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import Content from './Content.vue';
import Layout from './Layout.vue';
import Navigation from './Navigation.vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());
</script>
