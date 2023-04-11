import { defineStore } from 'pinia'

export const useAppUserStore = defineStore('appUserStore', {
    state: () => ({

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
        // getUser: () => JSON.parse(localStorage.getItem('user')),
        getUser: (state) => state.user,
    },
    actions: {
        setUser(user) { 
            this.user = user;
            // if isset user.id then set user.id else set 0

            // this.user.id = user.id ? user.id : 0;
            // this.user.name = user.name ? user.name : '*';
            // this.user.email = user.email ? user.email : '*';
            // this.user.current_password = user.current_password ? user.current_password : '*';
            // this.user.password = user.password ? user.password : '*';
            // this.user.password_confirmation = user.password_confirmation ? user.password_confirmation : '*';
            // this.user.right = user.right ? user.right : '*';
            // this.user.left = user.left ? user.left : '*';
            // this.user.rule_id = user.rule_id ? user.rule_id : 1;
            // this.user.role = user.role ? user.role : '*';

            // console.log(this.user);



            // localStorage.setItem('user', JSON.stringify(user));
        }
    }
});
