import { defineStore } from 'pinia';

import { generalState } from './general';
import { themeState, themeGetters, themeActions } from './theme';
import { storeId } from './types';

import type { PreferencesState } from './types';

import { STORAGE_KEYS } from '@/utils/localStorage-keys';

export const basePreferencesState = (): PreferencesState => {
  return {
    theme: themeState(),
    general: generalState(),
  };
};

export const usePreferencesStore = defineStore(storeId, {
  persist: {
    key: STORAGE_KEYS.PREFERENCES,
  },
  state: () => basePreferencesState(),

  getters: {
    ...themeGetters,
  },

  actions: {
    ...themeActions,
  },
});
