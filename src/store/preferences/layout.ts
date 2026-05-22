import { reactive } from 'vue';

import type { LayoutState } from './types';

export function createLayoutState() {
  const layout: LayoutState = reactive({
    layout: 'sidebar-nav',
    content: 'wide',
    navigation: {
      accordion: true,
    },
  });

  return layout;
}
