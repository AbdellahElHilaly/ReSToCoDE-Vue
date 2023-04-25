import { appMealStore } from '@/store/appMealStore.js'
import { appMenuStore } from '@/store/appMenuStore.js'
import { appCategoryStore } from '@/store/appCategoryStore.js'
import { appReservationSore } from '@/store/appReservationSore.js'

export default class StoreManager {
    constructor(endPoint) {
        this.endPoint = endPoint;
        this.storeMethods = { // object of objects of functions
            meals: {
                setAll: appMealStore().setAll,
                set: appMealStore().set,
                isEmpty: appMealStore().isEmpty,
                add: appMealStore().add,
            },
            menus: {
                setAll: appMenuStore().setAll,
                set: appMenuStore().set,
                isEmpty: appMenuStore().isEmpty,
                add: appMenuStore().add,
            },
            mealsmenus: {
                setAll: appMenuStore().setAll,
                set: appMenuStore().set,
                isEmpty: appMenuStore().isEmpty,
                add: appMenuStore().add,
            },
            categories: {
                setAll: appCategoryStore().setAll,
                set: appCategoryStore().set,
                isEmpty: appCategoryStore().isEmpty,
                add: appCategoryStore().add,
            },
            reservations: {
                setAll: appReservationSore().setAll,
                set: appReservationSore().set,
                isEmpty: appReservationSore().isEmpty,
                add: appReservationSore().add,
            },
        };
    }

    setAll(data) {
        this.storeMethods[this.endPoint].setAll(data);
    }

    set(data) {
        this.storeMethods[this.endPoint].set(data);
    }

    isEmpty() {
        return this.storeMethods[this.endPoint].isEmpty();
    }

    add(data) {
        this.storeMethods[this.endPoint].add(data);
    }
    }
