import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export * from './preferences';
export * from './preferences/types';
export * from './user';
export * from './user/index';

const store = createPinia();
store.use(piniaPluginPersistedstate);

export default store;
