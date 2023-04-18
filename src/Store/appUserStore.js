import { defineStore } from 'pinia'

export const useAppUserStore = defineStore('appUserStore', {
    state: () => ({
        empty: true,
        user : {
            id: 0,
            name: '',
            email: '',
            current_password: '',
            password: '',
            password_confirmation: '',
            right: '',
            left: '',
            rule_id: 1,
            role: ''
        }
        
    }),
    getters: {
        getUser: (state) => state.user,
        isEmpty: (state) => state.empty,
    },
    actions: {
        setUser(user) { 
            this.user = user;
            this.empty = false;
        }
    }
});
