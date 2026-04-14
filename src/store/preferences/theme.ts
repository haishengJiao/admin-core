import { useCssVar } from '@vueuse/core';
import { watchEffect } from 'vue';

import type { ThemeState, PreferencesState, PreferencesActions } from './types';
import type { _GettersTree } from 'pinia';

import { THEME_KEY } from '@/utils/localStorage-keys';

export const themeState = (): ThemeState => ({
  mode: 'system',
  systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  darkHeader: false,
  darkSidebar: false,
  colorPrimary: '#006ae4',
  colorPrimaryType: 'default',
  colorSuccess: '#57d188',
  colorWarning: '#efbd48',
  colorDanger: '#ff3860',
  colorError: '#ff3860',
  colorInfo: '#909298',
  radius: '0.5',
  fontSize: 16,
  grayMode: false,
  weakMode: false,
});

export const themeGetters = {
  effectiveTheme(state) {
    const { theme } = state;
    if (theme.mode === 'system') {
      return theme.systemPrefersDark ? 'dark' : 'light';
    }
    return theme.mode;
  },
  isDark(state) {
    const { theme } = state;
    if (theme.mode === 'system') {
      return theme.systemPrefersDark;
    }
    return theme.mode === 'dark';
  },
  isLight(state) {
    const { theme } = state;
    if (theme.mode === 'system') {
      return !theme.systemPrefersDark;
    }
    return theme.mode === 'light';
  },
} satisfies _GettersTree<PreferencesState>;

const applyTheme = (isDark: boolean) => {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
};

export const themeActions: PreferencesActions<typeof themeGetters> = {
  initTheme() {
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
      this.theme.systemPrefersDark = e.matches;
      if (this.theme.mode === 'system') {
        applyTheme(this.isDark);
      }
    });

    watchEffect(() => {
      const {
        radius,
        fontSize,
        colorPrimary,
        colorSuccess,
        colorWarning,
        colorDanger,
        colorError,
        colorInfo,
        grayMode,
        weakMode,
      } = this.theme;

      radiusVar.value = `${radius}rem`;
      fontSizeVar.value = `${fontSize}px`;
      primaryVar.value = colorPrimary;
      successVar.value = colorSuccess;
      warningVar.value = colorWarning;
      dangerVar.value = colorDanger;
      errorVar.value = colorError;
      infoVar.value = colorInfo;

      html.classList.toggle('gray-mode', grayMode);
      html.classList.toggle('weak-mode', weakMode);

      applyTheme(this.isDark);
    });
  },
};
