import { defineStore } from 'pinia';

export type ThemeMode = 'light' | 'dark' | 'system';

export type EffectiveThemeMode = Exclude<ThemeMode, 'system'>;

interface ThemeState {
  mode: ThemeMode;
  systemPrefersDark: boolean;
}

export const useThemeStore = defineStore('theme', {
  persist: true,
  state: (): ThemeState => ({
    mode: 'system',
    systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  }),
  getters: {
    currentMode: state => state.mode,
    isSystemDark: state => state.systemPrefersDark,
    effectiveTheme: (state): EffectiveThemeMode => {
      if (state.mode === 'system') {
        return state.systemPrefersDark ? 'dark' : 'light';
      }
      return state.mode;
    },
    isDark: state => {
      if (state.mode === 'system') {
        return state.systemPrefersDark;
      }
      return state.mode === 'dark';
    },
    isLight: state => {
      if (state.mode === 'system') {
        return !state.systemPrefersDark;
      }
      return state.mode === 'light';
    },
  },
  actions: {
    setMode(mode: ThemeMode) {
      this.mode = mode;
      document.documentElement.classList.toggle('dark', this.isDark);
    },
  },
});
