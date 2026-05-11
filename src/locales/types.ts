import type { LocaleMessages, DefineLocaleMessage } from 'vue-i18n';

export type Locale = 'zh-TW' | 'zh-CN' | 'en-US';

export type JsonModule = { default: DefineLocaleMessage };

type ModuleImportFn = () => Promise<unknown>;

export type GlobModules = Record<string, ModuleImportFn>;

type FileImportMap = Record<string, ModuleImportFn>;

export type LocaleRawMap = Partial<Record<Locale, FileImportMap>>;

export type LocaleMessagesMap = LocaleMessages<DefineLocaleMessage>;

export type ImportLocaleFn = () => Promise<{ default: LocaleMessagesMap }>;
