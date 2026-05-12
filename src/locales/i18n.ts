import { ref, unref } from 'vue';
import { createI18n } from 'vue-i18n';

import { loadThirdPartyMessage } from './thirdParty';

import type { Locale, JsonModule, GlobModules, LocaleRawMap, LocaleMessagesMap, ImportLocaleFn } from './types';
import type { Language } from 'element-plus/es/locale';
import type { App } from 'vue';

import { LOCALE_FILE_PATTERN } from '@/utils';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: '',
  messages: {},
});

const modules = import.meta.glob('./langs/**/*.json');
const elementLocale = ref<Language>();

const loadLocalesMapFromDir = (regexp: RegExp, modules: GlobModules): Record<Locale, ImportLocaleFn> => {
  const localesRaw: LocaleRawMap = {};
  const localesMap = {} as Record<Locale, ImportLocaleFn>;

  for (const path in modules) {
    const match = path.match(regexp);
    if (match) {
      const [_, locale, fileName] = match as [string, Locale, string];
      if (locale && fileName) {
        if (!localesRaw[locale]) {
          localesRaw[locale] = {};
        }
        if (modules[path]) {
          localesRaw[locale][fileName] = modules[path];
        }
      }
    }
  }

  for (const [locale, files] of Object.entries(localesRaw)) {
    localesMap[locale as Locale] = async () => {
      const messages: LocaleMessagesMap = {};
      for (const [fileName, importFn] of Object.entries(files)) {
        const module = (await importFn()) as JsonModule;
        messages[fileName] = module.default;
      }
      return { default: messages };
    };
  }

  return localesMap;
};

const localesMap = loadLocalesMapFromDir(LOCALE_FILE_PATTERN, modules);

const setI18nLanguage = (lang: Locale) => {
  i18n.global.locale.value = lang;
  document.documentElement.lang = lang;
};

const loadLocaleMessages = async (lang: Locale) => {
  if (unref(i18n.global.locale) === lang) {
    return setI18nLanguage(lang);
  }

  const message = await localesMap[lang]?.();

  // console.log(localesMap[lang], message);

  const [elLocale] = await loadThirdPartyMessage(lang);
  elementLocale.value = elLocale;

  if (message?.default) {
    i18n.global.setLocaleMessage(lang, message.default);
  }
  return setI18nLanguage(lang);
};

const setupI18n = async (app: App) => {
  app.use(i18n);

  i18n.global.setMissingHandler((locale, key) => {
    if (!import.meta.env.PROD && key.includes('.')) {
      console.warn(`[intlify] Not found '${key}' key in '${locale}' locale messages.`);
    }
  });
};

export { i18n, setupI18n, loadLocaleMessages, elementLocale };
