import { storeToRefs } from 'pinia';
import { watch } from 'vue';

import { useWatermark } from '../useWatermark';

import type { PartialWatermarkOptions } from '../useWatermark';

import { usePreferencesStore, useUserStore } from '@/store';

export function useAppWatermark() {
  const preferences = usePreferencesStore();
  const userStore = useUserStore();
  const { isDark, general } = storeToRefs(preferences);
  const { user } = storeToRefs(userStore);

  const { updateWatermark, destroyWatermark } = useWatermark();

  watch(
    () => ({
      enable: general.value.general.watermark,
      content: general.value.general.watermarkContent,
      isDark: isDark.value,
    }),
    ({ enable, content, isDark: isDarkValue }) => {
      if (enable) {
        const fontColor = isDarkValue ? '#a1a1aa' : '#71717a';
        const optins: PartialWatermarkOptions = {
          globalAlpha: 0.25,
          layout: 'grid',
          gridLayoutOptions: {
            rows: 2,
            cols: 2,
            gap: [20, 20],
            matrix: [
              [1, 0],
              [0, 1],
            ],
          },
          fontColor,
          content: content || `${user.value.username}\n${new Date().toLocaleString()}`,
        };
        updateWatermark(optins);
      } else {
        destroyWatermark();
      }
    },
    { immediate: true },
  );
}
