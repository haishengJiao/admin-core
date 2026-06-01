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
    <Block :title="$t('preferences.layout.widget.title')">
      <Widget v-model:language-toggle="layout.widget.languageToggle" v-model:theme-toggle="layout.widget.themeToggle" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import Content from './Content.vue';
import Layout from './Layout.vue';
import Navigation from './Navigation.vue';
import Widget from './Widget.vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());
</script>
