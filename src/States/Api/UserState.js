import { defineStore } from 'pinia'

export  class UserState {
    id = 0;
    name = '';
    email = '';
    password = '';
    password_confirmation = '';
    rule_id = 1;
}

export  const useUserStore = defineStore('user', {
    state: () => new UserState(),

    getters: {
        isLoggedIn: (state) => !!state.id,
        isAdmin: (state) => state.rule_id === 1,
        // add more getters as needed
    },

    actions: {
        setUser(user) {
            Object.assign(this.state, user);
        },

        clearUser() {
            Object.assign(this.state, new UserState());
        },

        // add more actions as needed
    },
});





