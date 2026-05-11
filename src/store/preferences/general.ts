import type { GeneralState } from './types';

export const generalState = (): GeneralState => ({
  general: {
    locale: 'zh-CN',
    dynamicTitle: true,
  },
});
