import { removeAppLoading } from 'virtual:inject-app-loading';

import { startProgress } from '../nprogress';

import type { Router } from 'vue-router';

import { usePreferencesStore } from '@/store';

export default (router: Router, loadedPaths: Set<string>) => {
  router.beforeEach((to, from) => {
    const { general } = usePreferencesStore();
    const { progress } = general.animation;

    to.meta.loaded = loadedPaths.has(to.path);

    if (!to.meta.loaded && progress) {
      startProgress();
    }

    if (!from.name && from.path === '/') {
      removeAppLoading();
    }
  });
};
