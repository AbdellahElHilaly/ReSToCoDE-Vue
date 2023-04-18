import { defineStore } from 'pinia'

export const appMenuStore = defineStore('menus', {
    state: () => ({
        empty: true,
        menus: [],
        menu: null,
    }),
    
    getters: {
        get: (state) => state.menu,
        getAll: (state) => state.menus,
        isEmpty: (state) => state.empty,
    },
    actions: {
        set(menu) {
            this.menu = menu;
            this.empty = false;
        },
        setAll(menus) {
            this.menus = menus;
            this.empty = false;
        },
    },
});
