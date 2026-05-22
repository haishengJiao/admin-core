import { reactive } from 'vue';

import type { AppState } from './types';

export function createAppState() {
  const app: AppState = reactive({
    enableStickyPreferencesNavigationBar: true,
    name: import.meta.env.VITE_APP_TITLE || '',
  });

  return app;
}
