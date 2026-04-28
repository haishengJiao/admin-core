import { defineStore } from 'pinia';

import { appState } from './app';
import { appearanceState, appearanceGetters, appearanceActions } from './appearance';
import { generalState } from './general';
import { storeId } from './types';

import type { PreferencesState } from './types';

import { STORAGE_KEYS } from '@/utils/localStorage-keys';

export const basePreferencesState = (): PreferencesState => {
  return {
    appearance: appearanceState(),
    general: generalState(),
    app: appState(),
  };
};

export const usePreferencesStore = defineStore(storeId, {
  persist: {
    key: STORAGE_KEYS.PREFERENCES,
  },
  state: () => basePreferencesState(),

  getters: {
    ...appearanceGetters,
  },

  actions: {
    ...appearanceActions,
  },
});
