import { watch } from 'vue';

import type { ThemeState, PreferencesState, PreferencesActions } from '../types';
import type { _GettersTree } from 'pinia';

import { THEME_KEY } from '@/utils/localStorage-keys';

export const themeState = (): ThemeState => ({
  mode: 'system',
  systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  darkHeader: false,
  darkSidebar: false,
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

const applyAccessibilityModes = (grayMode: boolean, weakMode: boolean) => {
  const html = document.documentElement;
  html.classList.toggle('gray-mode', grayMode);
  html.classList.toggle('weak-mode', weakMode);
};

export const themeActions: PreferencesActions<typeof themeGetters> = {
  initTheme() {
    const colorList = ['primary', 'success', 'warning', 'info', 'danger'];
    const rootStyles = getComputedStyle(document.documentElement);
    colorList.forEach(color => {
      const colorValue = rootStyles.getPropertyValue(`--${color}`);
      document.documentElement.style.setProperty(`--${color}`, colorValue);
    });

    applyTheme(this.isDark);
    applyAccessibilityModes(this.theme.grayMode, this.theme.weakMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', e => {
      this.theme.systemPrefersDark = e.matches;
      if (this.theme.mode === 'system') {
        applyTheme(this.isDark);
      }
    });

    document.documentElement.style.setProperty('--font-size-base', `${this.theme.fontSize}px`);
    watch(
      () => this.theme.fontSize,
      (_newVal, oldVal) => {
        if (!this.theme.fontSize) {
          this.theme.fontSize = oldVal;
        }
        document.documentElement.style.setProperty('--font-size-base', `${this.theme.fontSize}px`);
      },
    );

    document.documentElement.style.setProperty('--radius', `${this.theme.radius}rem`);
    watch(
      () => this.theme.radius,
      () => {
        document.documentElement.style.setProperty('--radius', `${this.theme.radius}rem`);
      },
    );

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
