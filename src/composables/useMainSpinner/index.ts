import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { usePreferencesStore } from '@/store';

export function useMainSpinner() {
  const router = useRouter();
  const preferences = usePreferencesStore();

  const spinning = ref(false);
  const startTime = ref(0);
  const minShowTime = 500;
  const loading = computed(() => preferences.general.animation.loading);

  router.beforeEach(to => {
    const { loaded, iframeSrc } = to.meta;

    if (loaded || iframeSrc || !loading.value) {
      return true;
    }

    startTime.value = performance.now();
    spinning.value = true;
    return true;
  });

  router.afterEach(to => {
    const { loaded, iframeSrc } = to.meta;

    if (loaded || iframeSrc || !loading.value) {
      return true;
    }

    const processTime = performance.now() - startTime.value;
    if (processTime < minShowTime) {
      setTimeout(() => {
        spinning.value = false;
      }, minShowTime - processTime);
    } else {
      spinning.value = false;
    }

    return true;
  });
  return { spinning };
}
