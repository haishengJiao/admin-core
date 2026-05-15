import type { LayoutState } from './types';

export const layoutState = (): LayoutState => ({
  layout: 'sidebar-nav',
  content: 'wide',
  navigation: {
    accordion: true,
  },
});
