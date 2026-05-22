import { cloneDeep } from 'lodash-es';
import { defineStore } from 'pinia';
import { ref, toRaw, watchEffect } from 'vue';

import { createAppState } from './app';
import { createAppearanceComputed, createAppearanceState } from './appearance';
import { createGeneralState } from './general';
import { createLayoutState } from './layout';

import { STORAGE_KEYS } from '@/utils';

export const usePreferencesStore = defineStore(
  'preferences',
  () => {
    const appearance = createAppearanceState();
    const general = createGeneralState();
    const layout = createLayoutState();
    const app = createAppState();

    const { effectiveTheme, isDark, isLight } = createAppearanceComputed(appearance);

    const originSnapshot = cloneDeep(toRaw({ appearance, general, layout, app }));
    function $reset() {
      Object.assign(appearance, originSnapshot.appearance);
      Object.assign(general, originSnapshot.general);
      Object.assign(layout, originSnapshot.layout);
      Object.assign(app, originSnapshot.app);
    }
    const isModified = ref(false);
    watchEffect(() => {
      const current = cloneDeep(toRaw({ appearance, general, layout, app }));
      isModified.value = current !== originSnapshot;
    });

    return { appearance, general, layout, app, effectiveTheme, isDark, isLight, isModified, $reset };
  },
  {
    persist: { key: STORAGE_KEYS.PREFERENCES },
  },
);
