import type { _GettersTree, Store } from 'pinia';

export type ThemeMode = 'light' | 'dark' | 'system';

export type EffectiveThemeMode = Exclude<ThemeMode, 'system'>;

export type ColorPrimaryType =
  | 'default'
  | 'violet'
  | 'pink'
  | 'yellow'
  | 'sky-blue'
  | 'green'
  | 'zinc'
  | 'deep-green'
  | 'deep-blue'
  | 'orange'
  | 'rose'
  | 'custom';

export interface ThemeState {
  mode: ThemeMode;
  systemPrefersDark: boolean;
  darkHeader: boolean;
  darkSidebar: boolean;
  colorPrimary: string;
  colorPrimaryType: ColorPrimaryType;
  colorSuccess: string;
  colorWarning: string;
  colorDanger: string;
  colorError: string;
  colorInfo: string;
  radius: string;
  fontSize: number;
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
