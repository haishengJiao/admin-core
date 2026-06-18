import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { User } from './types';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    id: 'V1StGXR8_Z5jdHi6B',
    username: 'Admin',
    email: 'admin@admin.com',
    avatar: 'https://mockmind-api.uifaces.co/content/cartoon/24.jpg',
  });

  return { user };
});
