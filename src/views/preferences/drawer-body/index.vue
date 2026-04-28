<template>
  <div class="h-full">
    <el-scrollbar>
      <div class="bg-bg z-10 w-full p-3" :class="{ 'sticky top-0': enableStickyPreferencesNavigationBar }">
        <el-segmented v-model="segmentedValue" block :options="segmentedOptions" />
      </div>
      <div class="p-3 pt-0">
        <component :is="component" />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { markRaw, reactive, ref, computed } from 'vue';

import Appearance from './appearance/index.vue';
import General from './general/index.vue';
import Layout from './layout/index.vue';
import Shortcuts from './shortcuts/index.vue';

import { usePreferencesStore } from '@/store';

const preferences = usePreferencesStore();
const enableStickyPreferencesNavigationBar = computed(() => preferences.app.enableStickyPreferencesNavigationBar);

const segmentedValue = ref('appearance');

const segmentedOptions = reactive([
  {
    label: '外观',
    value: 'appearance',
    component: markRaw(Appearance),
  },
  {
    label: '布局',
    value: 'layout',
    component: markRaw(Layout),
  },
  {
    label: '快捷键',
    value: 'shortcuts',
    component: markRaw(Shortcuts),
  },
  {
    label: '通用',
    value: 'preferences',
    component: markRaw(General),
  },
]);

const component = computed(() => {
  return segmentedOptions.find(item => item.value === segmentedValue.value)?.component;
});
</script>
