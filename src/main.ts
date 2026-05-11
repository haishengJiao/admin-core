import { removeAppNoscript } from 'virtual:inject-app-noscript';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import 'element-plus/theme-chalk/dark/css-vars.css';

import App from '@/App.vue';
import directives from '@/directives';
import { setupI18n } from '@/locales';
import router from '@/router';
import store from '@/store';
import '@/style/index.css';
import '@/assets/iconfont/iconfont.css';

const init = async () => {
  removeAppNoscript();
  const app = createApp(App);
  await setupI18n(app);
  app.use(directives);
  app.use(router);
  app.use(store);
  app.mount('#app');
};

init();
