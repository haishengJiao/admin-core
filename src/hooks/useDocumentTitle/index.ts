import { useTitle } from '@vueuse/core';
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { usePreferencesStore } from '@/store';

export const useDocumentTitle = () => {
  const route = useRoute();
  const preferences = usePreferencesStore();
  const title = useTitle();

  const computedTitle = computed(() => {
    const { general } = preferences.general;
    const appName = preferences.app.name;
    if (!general.dynamicTitle) {
      return appName;
    }
    const pageTitle = route.meta.title;
    return (pageTitle ? `${pageTitle} - ` : '') + appName;
  });

  watchEffect(() => {
    title.value = computedTitle.value;
  });
};
