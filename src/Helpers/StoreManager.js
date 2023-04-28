import { appMealStore } from '@/store/appMealStore.js'
import { appMenuStore } from '@/store/appMenuStore.js'
import { appCategoryStore } from '@/store/appCategoryStore.js'
import { appReservationSore } from '@/store/appReservationSore.js'

export default class StoreManager {
    constructor(endPoint) {
        this.endPoint = endPoint;
        
    }

    
    setAll(data) {
        switch(this.endPoint) {
            case 'meals':
                appMealStore().setAll(data);
                break;
            case 'menus':
                appMenuStore().setAll(data);
                break;
            case 'mealsmenus':
                appMenuStore().setAll(data);
                break;
            case 'categories':
                appCategoryStore().setAll(data);
                break;
            case 'reservations':
                appReservationSore().setAll(data);
                break;
        }
    }

    set(data) {
        switch(this.endPoint) {
            case 'meals':
                appMealStore().set(data);
                break;
            case 'menus':
                appMenuStore().set(data);
                break;
            case 'mealsmenus':
                appMenuStore().set(data);
                break;
            case 'categories':
                appCategoryStore().set(data);
                break;
            case 'reservations':
                appReservationSore().set(data);
                break;
        }
    }

    isEmpty() {
        switch(this.endPoint) {
            case 'meals':
                return appMealStore().isEmpty;
            case 'menus':
                return appMenuStore().isEmpty;
            case 'mealsmenus':
                return appMenuStore().isEmpty;
            case 'categories':
                return appCategoryStore().isEmpty;
            case 'reservations':
                return appReservationSore().isEmpty;
        }
    }

    add(data) {
        switch(this.endPoint) {
            case 'meals':
                appMealStore().add(data);
                break;
            case 'menus':
                appMenuStore().add(data);
                break;
            case 'mealsmenus':
                appMenuStore().add(data);
                break;
            case 'categories':
                appCategoryStore().add(data);
                break;
            case 'reservations':
                appReservationSore().add(data);
                break;
        }
    }

    getAll() {
        switch(this.endPoint) {
            case 'meals':
                return appMealStore().getAll;
            case 'menus':
                return appMenuStore().getAll;
            case 'mealsmenus':
                return appMenuStore().getAll;
            case 'categories':
                return appCategoryStore().getAll;
            case 'reservations':
                return appReservationSore().getAll;
        }
    }

    get() {
        switch(this.endPoint) {
            case 'meals':
                return appMealStore().get;
            case 'menus':
                return appMenuStore().get;
            case 'mealsmenus':
                return appMenuStore().get;
            case 'categories':
                return appCategoryStore().get;
            case 'reservations':
                return appReservationSore().get;
        }
    }

}
