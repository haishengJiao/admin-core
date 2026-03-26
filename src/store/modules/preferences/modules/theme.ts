import { watch } from 'vue';

import type { ThemeState, PreferencesState, PreferencesActions } from '../types';
import type { _GettersTree } from 'pinia';

import { THEME_KEY } from '@/utils/localStorage-keys';

export const themeState = (): ThemeState => ({
  mode: 'system',
  systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  darkHeader: false,
  darkSidebar: false,
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

const applyAccessibilityModes = (grayMode: boolean, weakMode: boolean) => {
  const html = document.documentElement;
  html.classList.toggle('gray-mode', grayMode);
  html.classList.toggle('weak-mode', weakMode);
};

export const themeActions: PreferencesActions<typeof themeGetters> = {
  initTheme() {
    applyTheme(this.isDark);
    applyAccessibilityModes(this.theme.grayMode, this.theme.weakMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', e => {
      this.theme.systemPrefersDark = e.matches;
      if (this.theme.mode === 'system') {
        applyTheme(this.isDark);
      }
    });

    watch(
      () => this.theme.mode,
      () => applyTheme(this.isDark),
    );

    watch(
      () => [this.theme.grayMode, this.theme.weakMode],
      () => applyAccessibilityModes(this.theme.grayMode, this.theme.weakMode),
    );
  },
};
