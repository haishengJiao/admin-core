import { useCssVar } from '@vueuse/core';
import { watchEffect } from 'vue';

import type { AppearanceState, PreferencesState, PreferencesActions } from './types';
import type { _GettersTree } from 'pinia';

import { THEME_KEY } from '@/utils/localStorage-keys';

export const appearanceState = (): AppearanceState => ({
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

export const appearanceGetters = {
  effectiveTheme(state) {
    const { appearance } = state;
    const { theme } = appearance;

    if (theme.mode === 'system') {
      return theme.systemPrefersDark ? 'dark' : 'light';
    }
    return theme.mode;
  },
  isDark(state) {
    const { appearance } = state;
    const { theme } = appearance;
    if (theme.mode === 'system') {
      return theme.systemPrefersDark;
    }
    return theme.mode === 'dark';
  },
  isLight(state) {
    const { appearance } = state;
    const { theme } = appearance;
    if (theme.mode === 'system') {
      return !theme.systemPrefersDark;
    }
    return theme.mode === 'light';
  },
} satisfies _GettersTree<PreferencesState>;

export const appearanceActions: PreferencesActions<typeof appearanceGetters> = {
  initAppearance() {
    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    };

    const radiusVar = useCssVar('--radius');
    const fontSizeVar = useCssVar('--font-size-base');
    const primaryVar = useCssVar('--primary');
    const successVar = useCssVar('--success');
    const warningVar = useCssVar('--warning');
    const dangerVar = useCssVar('--danger');
    const errorVar = useCssVar('--error');
    const infoVar = useCssVar('--info');
    const html = document.documentElement;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', e => {
      this.appearance.theme.systemPrefersDark = e.matches;
      if (this.appearance.theme.mode === 'system') {
        applyTheme(this.isDark);
      }
    });

    watchEffect(() => {
      const { radius, fontSize, primaryColor, secondaryColor, other } = this.appearance;
      const { success, warning, danger, error, info } = secondaryColor;
      const { grayMode, weakMode } = other;

      radiusVar.value = `${radius}rem`;
      fontSizeVar.value = `${fontSize}px`;
      primaryVar.value = primaryColor.color;
      successVar.value = success;
      warningVar.value = warning;
      dangerVar.value = danger;
      errorVar.value = error;
      infoVar.value = info;

      html.classList.toggle('gray-mode', grayMode);
      html.classList.toggle('weak-mode', weakMode);

      applyTheme(this.isDark);
    });
  },
};
