import { removeAppLoading } from 'virtual:inject-app-loading';

import { startProgress } from '../nprogress';

import type { Router } from 'vue-router';

import { usePreferencesStore } from '@/store';

export default (router: Router) => {
  router.beforeEach((_to, from) => {
    const { initAppearance, general } = usePreferencesStore();
    const { progress } = general.animation;

    if (progress) {
      startProgress();
    }

    if (!from.name && from.path === '/') {
      initAppearance();
      removeAppLoading();
    }
  });
};
