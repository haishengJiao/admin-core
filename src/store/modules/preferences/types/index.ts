import type { _GettersTree, Store } from 'pinia';

export type ThemeMode = 'light' | 'dark' | 'system';

export type EffectiveThemeMode = Exclude<ThemeMode, 'system'>;

export interface ThemeState {
  mode: ThemeMode;
  systemPrefersDark: boolean;
  darkHeader: boolean;
  darkSidebar: boolean;
  grayMode: boolean;
  weakMode: boolean;
}

type ThemeActions = {
  initTheme(): void;
};

export interface GeneralState {
  enableStickyPreferencesNavigationBar: boolean;
}

export interface PreferencesState {
  theme: ThemeState;
  general: GeneralState;
}

export const storeId = 'preferences';
export type MergeActions = ThemeActions;
export type PreferencesStore<G> = Store<typeof storeId, PreferencesState, G, MergeActions>;
export type PreferencesActions<G> = MergeActions & ThisType<PreferencesStore<G>>;
