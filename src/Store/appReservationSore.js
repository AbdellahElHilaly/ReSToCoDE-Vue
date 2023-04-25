import { defineStore } from 'pinia'


export const appReservationSore = defineStore('reservations', {

    state: () => ({
        empty: true,
        reservations: [],
        reservation: null,
    }),
    
    getters: {
        get: (state) => state.reservation,
        getAll: (state) => state.reservations,
        isEmpty: (state) => state.empty,
    },
    actions: {
        set(reservation) {
            this.reservation = reservation;
            this.empty = false;
        },
        setAll(reservations) {
            this.reservations = reservations;
            this.empty = false;
        },
    },
});
