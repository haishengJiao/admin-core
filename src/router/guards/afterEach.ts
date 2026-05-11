import { stopProgress } from '../nprogress';

import type { Router } from 'vue-router';

import { usePreferencesStore } from '@/store';

export default (router: Router) => {
  router.afterEach((_to, _from) => {
    const { general } = usePreferencesStore();
    const { progress } = general.animation;

    if (progress) {
      stopProgress();
    }
  });
};
