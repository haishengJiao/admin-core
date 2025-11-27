import { createApp } from 'vue';

import App from '@/App.vue';
import directives from '@/directives';
import router from '@/router';
import store from '@/store';
import '@/style/index.scss';

const app = createApp(App);
app.use(directives);
app.use(router);
app.use(store);
app.mount('#app');
