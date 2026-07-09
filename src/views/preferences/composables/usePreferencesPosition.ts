import { storeToRefs } from 'pinia';
import { readonly, computed } from 'vue';

import { usePreferencesStore } from '@/store';

export function usePreferencesPosition() {
  const { layout, isFullContent } = storeToRefs(usePreferencesStore());

  const currentPosition = computed(() => {
    const position = layout.value.widget.preferencesButtonPosition;
    const headerEnabled = layout.value.header.enable;

    if (isFullContent.value) {
      return 'fixed';
    }

    if (!headerEnabled) {
      return 'fixed';
    }

    if (position === 'header' || position === 'user-dropdown') {
      return position;
    }

    if (position === 'auto') {
      return headerEnabled ? 'header' : 'fixed';
    }

    return 'fixed';
  });

  const header = computed(() => currentPosition.value === 'header');
  const fixed = computed(() => currentPosition.value === 'fixed');
  const userDropdown = computed(() => currentPosition.value === 'user-dropdown');

  return { header: readonly(header), fixed: readonly(fixed), userDropdown: readonly(userDropdown) };
}
