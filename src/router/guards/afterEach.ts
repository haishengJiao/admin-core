import { stopProgress } from '../nprogress';

import type { Router } from 'vue-router';

import { usePreferencesStore } from '@/store';

export default (router: Router, loadedPaths: Set<string>) => {
  router.afterEach((to, _from) => {
    const { general } = usePreferencesStore();
    const { progress } = general.animation;

    loadedPaths.add(to.path);

    if (progress) {
      stopProgress();
    }
  });
};
