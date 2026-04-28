import type { AppState } from './types';

export const appState = (): AppState => ({
  enableStickyPreferencesNavigationBar: true,
  name: import.meta.env.VITE_APP_TITLE || '',
});
