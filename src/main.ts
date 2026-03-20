import { removeAppLoading } from 'virtual:inject-app-loading';
import { removeAppNoscript } from 'virtual:inject-app-noscript';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import 'element-plus/theme-chalk/dark/css-vars.css';

import App from '@/App.vue';
import directives from '@/directives';
import i18n from '@/language';
import router from '@/router';
import store from '@/store';
import '@/style/index.css';
import '@/assets/iconfont/iconfont.css';

const init = () => {
  removeAppNoscript();
  setTimeout(() => {
    const colorList = ['primary', 'success', 'warning', 'info', 'danger'];
    const rootStyles = getComputedStyle(document.documentElement);
    colorList.forEach(color => {
      const colorValue = rootStyles.getPropertyValue(`--${color}`);
      document.documentElement.style.setProperty(`--${color}`, colorValue);
    });
  }, 100);

  const app = createApp(App);
  app.use(i18n);
  app.use(directives);
  app.use(router);
  app.use(store);
  app.mount('#app');
  removeAppLoading();
};

init();
