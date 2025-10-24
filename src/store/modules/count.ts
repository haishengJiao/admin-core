import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count === 0) {
        return;
      }
      this.count--;
    },
  },
});
