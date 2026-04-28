import type { GeneralState } from './types';

export const generalState = (): GeneralState => ({
  enableStickyPreferencesNavigationBar: true,
  name: import.meta.env.VITE_APP_TITLE || '',
  dynamicTitle: true,
});
