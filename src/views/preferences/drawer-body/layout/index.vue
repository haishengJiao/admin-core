<template>
  <div>
    <Block :title="$t('preferences.layout.title')">
      <Layout v-model="layout.layout" />
    </Block>
    <Block :title="$t('preferences.layout.content.title')">
      <Content v-model="layout.content" />
    </Block>
    <Block :title="$t('preferences.layout.sidebar.title')">
      <Sidebar
        v-model:collapsed="layout.sidebar.collapsed"
        v-model:draggable="layout.sidebar.draggable"
        v-model:enable="layout.sidebar.enable"
        v-model:width="layout.sidebar.width"
      />
    </Block>
    <Block :title="$t('preferences.layout.navigationMenu.title')">
      <Navigation v-model:accordion="layout.navigation.accordion" />
    </Block>
    <Block :title="$t('preferences.layout.widget.title')">
      <Widget
        v-model:language-toggle="layout.widget.languageToggle"
        v-model:sidebar-toggle="layout.widget.sidebarToggle"
        v-model:theme-toggle="layout.widget.themeToggle"
      />
    </Block>
    <Block :title="$t('preferences.layout.footer.title')">
      <Footer v-model:enable="layout.footer.enable" v-model:fixed="layout.footer.fixed" />
    </Block>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import Block from '../Block.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
import Layout from './Layout.vue';
import Navigation from './Navigation.vue';
import Sidebar from './Sidebar.vue';
import Widget from './Widget.vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());
</script>
