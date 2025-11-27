import * as VueI18n from 'vue-i18n';

import en_US from './packages/en-US.json';
import zh_CN from './packages/zh-CN.json';
import zh_TW from './packages/zh-TW.json';

const i18n = VueI18n.createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh_CN',
  messages: {
    zh_CN,
    zh_TW,
    en_US,
  },
});

export default i18n;
