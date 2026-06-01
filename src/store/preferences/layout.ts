import { reactive } from 'vue';

import type { LayoutState } from './types';

export function createLayoutState() {
  const layout: LayoutState = reactive({
    layout: 'sidebar-nav',
    content: 'wide',
    navigation: {
      accordion: true,
    },
    widget: {
      themeToggle: true,
      languageToggle: true,
    },
  });

  return layout;
}
