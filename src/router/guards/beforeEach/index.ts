import type { Router } from 'vue-router';

import { useThemeStore } from '@/store';

export default (router: Router) => {
  router.beforeEach((_to, from) => {
    if (!from.name && from.path === '/') {
      const theme = useThemeStore();
      theme.init();
    }
  });
};
