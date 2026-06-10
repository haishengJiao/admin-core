<template>
  <div class="h-full">
    <el-scrollbar ref="scrollbarRef">
      <div class="bg-bg z-1 w-full p-3" :class="{ 'sticky top-0': enableStickyPreferencesNavigationBar }">
        <el-segmented v-model="segmentedValue" block :options="segmentedOptions" @change="handleSegmentedChange" />
      </div>
      <div class="p-3 pt-0">
        <component :is="component" />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { markRaw, ref, computed, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import Appearance from './appearance/index.vue';
import General from './general/index.vue';
import Layout from './layout/index.vue';
import Shortcuts from './shortcuts/index.vue';

import { usePreferencesStore } from '@/store';

const { t } = useI18n();
const preferences = usePreferencesStore();
const enableStickyPreferencesNavigationBar = computed(() => preferences.app.enableStickyPreferencesNavigationBar);

const segmentedValue = ref('appearance');

const segmentedOptions = computed(() => {
  return [
    {
      label: t('preferences.appearance.title'),
      value: 'appearance',
      component: markRaw(Appearance),
    },
    {
      label: t('preferences.layout.title'),
      value: 'layout',
      component: markRaw(Layout),
    },
    {
      label: t('preferences.shortcutKeys.title'),
      value: 'shortcuts',
      component: markRaw(Shortcuts),
    },
    {
      label: t('preferences.general.title'),
      value: 'general',
      component: markRaw(General),
    },
  ];
});

const component = computed(() => {
  return segmentedOptions.value.find(item => item.value === segmentedValue.value)?.component;
});

const scrollbar = useTemplateRef('scrollbarRef');
const handleSegmentedChange = () => {
  scrollbar.value?.setScrollTop(0);
};
</script>
