import { defineStore } from 'pinia'

export const appMealStore = defineStore('meals', {
    state: () => ({
            empty: true,
            meals: [],
            meal: null,
    }),
    getters: {
        get: (state) => state.meal,
        getAll: (state) => state.meals,
        isEmpty: (state) => state.empty,
    },
    actions: {
        set(meal) {
            this.meal = meal;
            this.empty = false;
        },
        setAll(meals) {
            this.meals = meals;
            this.empty = false;
        },
        clear() {
            this.empty = true;
        }
    },
});
