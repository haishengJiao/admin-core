import { reactive } from 'vue';

import type { LayoutState } from './types';

export function createLayoutState() {
  const layout: LayoutState = reactive({
    layout: 'sidebar-nav',
    content: 'wide',
    sidebar: {
      enable: true,
      draggable: true,
      collapsed: false,
      width: 226,
    },
    navigation: {
      accordion: true,
    },
    widget: {
      themeToggle: true,
      languageToggle: true,
      sidebarToggle: true,
    },
    footer: {
      enable: false,
      fixed: false,
    },
    copyright: {
      enable: true,
      companyName: import.meta.env.VITE_APP_TITLE || '',
      companySiteLink: 'https://www.baidu.com',
      date: '2026',
      icp: '',
      icpLink: '',
    },
  });

  return layout;
}
