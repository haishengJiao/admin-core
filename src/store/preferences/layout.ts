import { reactive, watch } from 'vue';

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
    header: {
      enable: true,
    },
    navigation: {
      accordion: true,
    },
    widget: {
      themeToggle: true,
      languageToggle: true,
      sidebarToggle: true,
      preferencesButtonPosition: 'auto',
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

  watch(
    () => layout.layout,
    newVal => {
      if (newVal === 'full-content') {
        layout.widget.preferencesButtonPosition = 'auto';
      }
    },
    { immediate: true },
  );

  watch(
    () => layout.header.enable,
    newVal => {
      if (!newVal) {
        const { preferencesButtonPosition } = layout.widget;
        if (preferencesButtonPosition === 'header' || preferencesButtonPosition === 'user-dropdown')
          layout.widget.preferencesButtonPosition = 'auto';
      }
    },
    { immediate: true },
  );

  return layout;
}
