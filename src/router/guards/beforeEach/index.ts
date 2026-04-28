import { removeAppLoading } from 'virtual:inject-app-loading';

import type { Router } from 'vue-router';

import { usePreferencesStore } from '@/store';

export default (router: Router) => {
  router.beforeEach((_to, from) => {
    if (!from.name && from.path === '/') {
      const preferences = usePreferencesStore();
      preferences.initAppearance();
      removeAppLoading();
    }
  });
};
