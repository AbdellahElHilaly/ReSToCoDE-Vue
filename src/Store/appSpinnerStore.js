import { defineStore } from 'pinia'

export const useAppSpinnerStore = defineStore('appSpinner', {
  state: () => ({
    visibility: 0,
  }),
  getters: {
    getStatus: (state) => state.visibility,
  },
  actions: {
    show(id) {
      this.visibility = id
    },
    hide() {
      this.visibility = 0;
    },
  },
});
