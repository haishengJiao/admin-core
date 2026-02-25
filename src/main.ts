import { removeAppLoading } from 'virtual:inject-app-loading';
import { removeAppNoscript } from 'virtual:inject-app-noscript';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';

import App from '@/App.vue';
import directives from '@/directives';
import i18n from '@/language';
import router from '@/router';
import store from '@/store';
import '@/style/index.css';
import '@/assets/iconfont/iconfont.css';

const init = () => {
  removeAppNoscript();
  const app = createApp(App);
  app.use(i18n);
  app.use(directives);
  app.use(router);
  app.use(store);
  app.mount('#app');
  removeAppLoading();
};

init();
