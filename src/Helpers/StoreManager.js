import { appMealStore } from '@/store/appMealStore.js'
import { appMenuStore } from '@/store/appMenuStore.js'
import { appCategoryStore } from '@/store/appCategoryStore.js'


export default class  StoreManager {
    constructor(model) {
        this.model = model;
    }


    setAll(data) {
        if(this.model === 'meals')  appMealStore().setAll(data);
        if(this.model === 'menus')  appMenuStore().setAll(data);
        if(this.model === 'categories')  appCategoryStore().setAll(data);
    }

    get isEmpty() {
        if(this.model === 'meals')  return appMealStore().isEmpty;
        if(this.model === 'menus')  return appMenuStore().isEmpty;
        if(this.model === 'categories')  return appCategoryStore().isEmpty;
    }

}