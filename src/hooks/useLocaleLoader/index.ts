import { watch } from 'vue';

import { loadLocaleMessages } from '@/locales';
import { usePreferencesStore } from '@/store';

export function useLocaleLoader() {
  const preferences = usePreferencesStore();

  watch(
    () => preferences.general.general.locale,
    locale => {
      loadLocaleMessages(locale);
    },
    { immediate: true },
  );
}
