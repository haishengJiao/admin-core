import { cloneDeep, isEqual } from 'lodash-es';
import { defineStore } from 'pinia';
import { ref, toRaw, watchEffect } from 'vue';

import { createAppState } from './app';
import { createAppearanceComputed, createAppearanceState } from './appearance';
import { createGeneralState } from './general';
import { createLayoutComputed, createLayoutState } from './layout';

import { STORAGE_KEYS } from '@/utils';

export const usePreferencesStore = defineStore(
  'preferences',
  () => {
    const appearance = createAppearanceState();
    const general = createGeneralState();
    const layout = createLayoutState();
    const app = createAppState();

    const { effectiveTheme, isDark, isLight } = createAppearanceComputed(appearance);
    const { isFullContent } = createLayoutComputed(layout);

    const originSnapshot = cloneDeep(toRaw({ appearance, general, layout, app }));
    function $reset() {
      const resetData = cloneDeep(originSnapshot);
      Object.assign(appearance, resetData.appearance);
      Object.assign(general, resetData.general);
      Object.assign(layout, resetData.layout);
      Object.assign(app, resetData.app);
    }
    const isModified = ref(false);
    watchEffect(() => {
      const current = cloneDeep(toRaw({ appearance, general, layout, app }));
      isModified.value = !isEqual(current, originSnapshot);
    });

    return { appearance, general, layout, app, effectiveTheme, isDark, isLight, isFullContent, isModified, $reset };
  },
  {
    persist: { key: STORAGE_KEYS.PREFERENCES },
  },
);
