import type { Locale } from '@/locales';

export interface LanguageOption {
  value: Locale;
  label: string;
  disabled?: boolean;
}

export const SUPPORT_LANGUAGES: LanguageOption[] = [
  { label: '简体中文', value: 'zh-CN' },
  { label: '繁體中文', value: 'zh-TW' },
  { label: 'English', value: 'en-US' },
];

export const SIDEBAR_MIN_WIDTH = 160;

export const SIDEBAR_MAX_WIDTH = 320;
