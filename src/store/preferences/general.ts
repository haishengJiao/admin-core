import { reactive } from 'vue';

import type { GeneralState } from './types';

export function createGeneralState() {
  const general: GeneralState = reactive({
    general: {
      locale: 'zh-CN',
      dynamicTitle: true,
    },
    animation: {
      progress: true,
      loading: true,
      enable: true,
      name: 'fade-slide',
    },
  });

  return general;
}
