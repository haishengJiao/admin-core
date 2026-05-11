import type { Locale } from '@/locales';
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

export interface AppearanceState {
  theme: {
    /** 当前主题 */
    mode: ThemeMode;
    /** 系统是否偏好暗色主题（用于跟随系统模式） */
    systemPrefersDark: boolean;
    /** 是否开启半深色header（只在theme='light'时生效） */
    darkHeader: boolean;
    /** 是否开启半深色菜单（只在theme='light'时生效） */
    darkSidebar: boolean;
  };
  primaryColor: {
    /** 主色 */
    color: string;
    /** 主色类型 */
    type: ColorPrimaryType;
  };
  secondaryColor: {
    /** 成功色 */
    success: string;
    /** 告警色 */
    warning: string;
    /** 危险色 */
    danger: string;
    /** 错误色 */
    error: string;
    /** 信息色 */
    info: string;
  };
  /** 圆角 */
  radius: string;
  /** 字体大小（单位：px） */
  fontSize: number;
  other: {
    /** 是否开启灰色模式 */
    grayMode: boolean;
    /** 是否开启色弱模式 */
    weakMode: boolean;
  };
}

type AppearanceActions = {
  initAppearance(): void;
};

export interface LayoutState {
  navigation: {
    // 是否开启侧边导航菜单手风琴模式
    accordion: boolean;
  };
}

export interface GeneralState {
  general: {
    /** 语言 */
    locale: Locale;
    /** 是否开启动态标题 */
    dynamicTitle: boolean;
  };
  animation: {
    /** 是否开启页面切换进度条 */
    progress: boolean;
  };
}

export interface AppState {
  /** 是否开启首选项导航栏吸顶效果 */
  enableStickyPreferencesNavigationBar: boolean;
  /** 应用名称 */
  name: string;
}

export interface PreferencesState {
  appearance: AppearanceState;
  layout: LayoutState;
  general: GeneralState;
  app: AppState;
}

export const storeId = 'preferences';
export type MergeActions = AppearanceActions;
export type PreferencesStore<G> = Store<typeof storeId, PreferencesState, G, MergeActions>;
export type PreferencesActions<G> = MergeActions & ThisType<PreferencesStore<G>>;
