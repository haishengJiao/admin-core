import { useTitle } from '@vueuse/core';
import { computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { $t } from '@/locales';
import { usePreferencesStore } from '@/store';

export const useDocumentTitle = () => {
  const router = useRouter();
  const preferences = usePreferencesStore();
  const title = useTitle();

  const computedTitle = computed(() => {
    const { general } = preferences.general;
    const appName = preferences.app.name;
    if (!general.dynamicTitle) {
      return appName;
    }
    const pageTitle = router.currentRoute.value.meta.title;
    return (pageTitle ? `${$t(pageTitle)} - ` : '') + appName;
  });

  watchEffect(() => {
    title.value = computedTitle.value;
  });
};
