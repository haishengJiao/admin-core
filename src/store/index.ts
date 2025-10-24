import { createPinia } from 'pinia';

export { useCountStore, useUserStore } from './modules';

const store = createPinia();

export default store;
