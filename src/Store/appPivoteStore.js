import { defineStore } from 'pinia'

export const appPivoteStore = defineStore('pivotes', {
    state: () => ({
            empty: true,
            pivotes: [],
            pivote: null,
    }),
    getters: {
        get: (state) => state.pivote,
        getAll: (state) => state.pivotes,
        isEmpty: (state) => state.empty,
    },
    actions: {
        set(pivote) {
            this.pivote = pivote;
            this.empty = false;
        },
        setAll(pivotes) {
            this.pivotes = pivotes;
            this.empty = false;
        },
        clear() {
            this.empty = true;
        }
    },
});
