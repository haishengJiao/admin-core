import type { Locale } from '@/locales';

export type ThemeMode = 'light' | 'dark' | 'system';

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

export type LayoutType =
  | 'full-content'
  | 'header-mixed-nav'
  | 'header-nav'
  | 'header-sidebar-nav'
  | 'mixed-nav'
  | 'sidebar-mixed-nav'
  | 'sidebar-nav';

export type ContentType = 'wide' | 'compact';

export type PreferencesButtonPositionType = 'auto' | 'header' | 'fixed' | 'user-dropdown';

export interface LayoutState {
  /** 布局 */
  layout: LayoutType;
  /** 内容 */
  content: ContentType;
  sidebar: {
    /** 是否显示侧边栏 */
    enable: boolean;
    /** 是否开启侧边栏拖拽 */
    draggable: boolean;
    /** 是否折叠菜单 */
    collapsed: boolean;
    /** 侧边栏宽度 */
    width: number;
  };
  header: {
    /** 是否显示顶栏 */
    enable: boolean;
  };
  navigation: {
    /** 是否开启侧边导航菜单手风琴模式 */
    accordion: boolean;
  };
  widget: {
    /** 是否开启快捷主题切换 */
    themeToggle: boolean;
    /** 是否开启快捷语言切换 */
    languageToggle: boolean;
    /** 是否开启快捷侧边栏切换 */
    sidebarToggle: boolean;
    /** 偏好设置按钮位置 */
    preferencesButtonPosition: PreferencesButtonPositionType;
  };
  footer: {
    /** 是否显示底栏 */
    enable: boolean;
    /** 是否固定在底部 */
    fixed: boolean;
  };
  copyright: {
    /** 是否显示版权 */
    enable: true;
    /** 公司名称 */
    companyName: string;
    /** 公司主页 */
    companySiteLink: string;
    /** 日期 */
    date: string;
    /** ICP */
    icp: string;
    /** ICP 网站链接 */
    icpLink: string;
  };
}

export type PageTransitionType = 'fade' | 'fade-down' | 'fade-slide' | 'fade-up';

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
    /** 是否开启页面切换 Loading */
    loading: boolean;
    /** 是否开启页面切换动画 */
    enable: boolean;
    /** 页面切换动画 */
    name: PageTransitionType;
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
