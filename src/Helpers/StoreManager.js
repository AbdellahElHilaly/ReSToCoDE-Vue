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
                all: appMealStore().getAll,
            },
            menus: {
                setAll: appMenuStore().setAll,
                set: appMenuStore().set,
                isEmpty: appMenuStore().isEmpty,
                add: appMenuStore().add,
                all: appMenuStore().getAll,
            },
            mealsmenus: {
                setAll: appMenuStore().setAll,
                set: appMenuStore().set,
                isEmpty: appMenuStore().isEmpty,
                add: appMenuStore().add,
                all: appMenuStore().getAll,
            },
            categories: {
                setAll: appCategoryStore().setAll,
                set: appCategoryStore().set,
                isEmpty: appCategoryStore().isEmpty,
                add: appCategoryStore().add,
                all: appCategoryStore().getAll,
            },
            reservations: {
                setAll: appReservationSore().setAll,
                set: appReservationSore().set,
                isEmpty: appReservationSore().isEmpty,
                add: appReservationSore().add,
                all: appReservationSore().getAll,
            },
        };
    }

    setAll(data) {
        if (this.storeMethods.hasOwnProperty(this.endPoint)) 
        this.storeMethods[this.endPoint].setAll(data);
    }

    set(data) {
        if (this.storeMethods.hasOwnProperty(this.endPoint)) 
        this.storeMethods[this.endPoint].set(data);
    }

    isEmpty() {
        if (this.storeMethods.hasOwnProperty(this.endPoint)) 
        return this.storeMethods[this.endPoint].isEmpty();
    }

    add(data) {
        if (this.storeMethods.hasOwnProperty(this.endPoint)) 
        this.storeMethods[this.endPoint].add(data);
    }

    all() {
        if (this.storeMethods.hasOwnProperty(this.endPoint)) 
        return this.storeMethods[this.endPoint].getAll();
    }

}
