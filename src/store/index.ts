import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export * from './modules/preferences';

const store = createPinia();
store.use(piniaPluginPersistedstate);

export default store;
