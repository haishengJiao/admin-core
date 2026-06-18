import { storeToRefs } from 'pinia';
import { ref, watch, readonly } from 'vue';

import { usePreferencesStore } from '@/store';

export function usePreferencesPosition() {
  const { layout } = storeToRefs(usePreferencesStore());

  const header = ref(false);
  const fixed = ref(false);
  const userDropdown = ref(false);

  watch(
    [() => layout.value.layout, () => layout.value.widget.preferencesButtonPosition],
    () => {
      header.value = false;
      fixed.value = false;
      userDropdown.value = false;

      const position = layout.value.widget.preferencesButtonPosition;

      if (position === 'header') {
        header.value = true;
        return;
      }
      if (position === 'fixed') {
        fixed.value = true;
        return;
      }
      if (position === 'user-dropdown') {
        userDropdown.value = true;
        return;
      }

      if (position === 'auto') {
        fixed.value = layout.value.layout === 'full-content';
        header.value = layout.value.layout !== 'full-content';
      }
    },
    { immediate: true },
  );

  return { header: readonly(header), fixed: readonly(fixed), userDropdown: readonly(userDropdown) };
}
