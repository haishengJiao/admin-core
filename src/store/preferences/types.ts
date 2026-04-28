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
  /** 当前主题 */
  mode: ThemeMode;
  /** 系统是否偏好暗色主题（用于跟随系统模式） */
  systemPrefersDark: boolean;
  /** 是否开启半深色header（只在theme='light'时生效） */
  darkHeader: boolean;
  /** 是否开启半深色菜单（只在theme='light'时生效） */
  darkSidebar: boolean;
  /** 主色 */
  colorPrimary: string;
  /** 主色类型 */
  colorPrimaryType: ColorPrimaryType;
  /** 成功色 */
  colorSuccess: string;
  /** 告警色 */
  colorWarning: string;
  /** 危险色 */
  colorDanger: string;
  /** 错误色 */
  colorError: string;
  /** 信息色 */
  colorInfo: string;
  /** 圆角 */
  radius: string;
  /** 字体大小（单位：px） */
  fontSize: number;
  /** 是否开启灰色模式 */
  grayMode: boolean;
  /** 是否开启色弱模式 */
  weakMode: boolean;
}

type ThemeActions = {
  initTheme(): void;
};

export interface GeneralState {
  /** 是否开启首选项导航栏吸顶效果 */
  enableStickyPreferencesNavigationBar: boolean;
  /** 应用名称 */
  name: string;
  /** 是否开启动态标题 */
  dynamicTitle: boolean;
}

export interface PreferencesState {
  theme: ThemeState;
  general: GeneralState;
}

export const storeId = 'preferences';
export type MergeActions = ThemeActions;
export type PreferencesStore<G> = Store<typeof storeId, PreferencesState, G, MergeActions>;
export type PreferencesActions<G> = MergeActions & ThisType<PreferencesStore<G>>;
