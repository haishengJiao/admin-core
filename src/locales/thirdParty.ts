import dayjs from 'dayjs';
import enLocale from 'element-plus/es/locale/lang/en';

import type { Locale } from './types';
import type { Language } from 'element-plus/es/locale';

const elementPlusMap: Record<Exclude<Locale, 'en-US'>, () => Promise<{ default: Language }>> = {
  'zh-CN': () => import('element-plus/es/locale/lang/zh-cn'),
  'zh-TW': () => import('element-plus/es/locale/lang/zh-tw'),
};

const dayjsMap: Record<Locale, () => Promise<ILocale>> = {
  'zh-CN': () => import('dayjs/locale/zh-cn'),
  'zh-TW': () => import('dayjs/locale/zh-tw'),
  'en-US': () => import('dayjs/locale/en'),
};

const loadElementPlusLocale = async (lang: Locale) => {
  if (lang === 'en-US') {
    return enLocale;
  }

  const loader = elementPlusMap[lang];
  if (!loader) {
    console.warn(`[i18n] No Element Plus locale found for ${lang}, falling back to English`);
    return enLocale;
  }
  const locale = await loader();
  return locale.default;
};

const loadDayjsLocale = async (lang: Locale) => {
  const loader = dayjsMap[lang];
  let locale: ILocale;
  if (!loader) {
    console.warn(`[i18n] No Dayjs locale found for ${lang}, falling back to English`);
    locale = await dayjsMap['en-US']();
  } else {
    locale = await loader();
  }
  dayjs.locale(locale);
};

const loadThirdPartyMessage = async (lang: Locale) => {
  return await Promise.all([loadElementPlusLocale(lang), loadDayjsLocale(lang)]);
};

export { loadThirdPartyMessage };
