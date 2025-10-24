import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
  }),
  getters: {
    getName: state => state.name,
  },
});
