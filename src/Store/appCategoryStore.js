import { defineStore } from 'pinia'

export const appCategoryStore = defineStore('category', {
    state: () => ({
            empty: true,
            categories: [],
            category: null,
    }),
    getters: {
        get: (state) => state.category,
        getAll: (state) => state.categories,
        isEmpty: (state) => state.empty,
    },
    actions: {
        set(category) {
            this.category = category;
            this.empty = false;
        },
        setAll(categories) {
            this.categories = categories;
            this.empty = false;
        },
        clear() {
            this.empty = true;
        }
    },
});
