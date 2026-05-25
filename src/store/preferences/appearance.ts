import { computed, reactive } from 'vue';

import type { AppearanceState } from './types';

export function createAppearanceState() {
  const appearance: AppearanceState = reactive({
    theme: {
      mode: 'system',
      systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      darkHeader: false,
      darkSidebar: false,
    },
    primaryColor: {
      color: '#006ae4',
      type: 'default',
    },
    secondaryColor: {
      success: '#57d188',
      warning: '#efbd48',
      danger: '#ff3860',
      error: '#ff3860',
      info: '#909298',
    },
    radius: '0.5',
    fontSize: 16,
    other: {
      grayMode: false,
      weakMode: false,
    },
  });

  return appearance;
}

export function createAppearanceComputed(appearance: AppearanceState) {
  const effectiveTheme = computed(() => {
    const { theme } = appearance;
    if (theme.mode === 'system') {
      return theme.systemPrefersDark ? 'dark' : 'light';
    }
    return theme.mode;
  });
  const isDark = computed(() => {
    const { theme } = appearance;

    if (theme.mode === 'system') return theme.systemPrefersDark;
    return theme.mode === 'dark';
  });

  const isLight = computed(() => !isDark.value);

  return {
    effectiveTheme,
    isDark,
    isLight,
  };
}
