<script setup>

    import { defineProps } from 'vue';
    import { ref, onMounted } from 'vue';
    import Swal from 'sweetalert2'
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import Consumer from '@/Api/Services/Consumer.js';
    import Helper from '@/Helpers/Helper.js';
    import { appReservationSore } from '@/store/appReservationSore.js'



    const consumer = new Consumer('reservations');

    const reservations = async () => {
        Swal.fire({
            title: 'Choose an option',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Reserve',
            denyButtonText: `Unreserve`,
        }).then((result) => {
            if (result.isConfirmed) {
                reserve();
            } else if (result.isDenied) {
                unreserve();
            }
        })
    }; 


    const reserve = async () => {

        useAppSpinnerStore().show('reserve');
        const result = await consumer.store(Helper.saveFormData({menu_id: props.menu_id}));
        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Reserved',
                text: result.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message,
            });
        }

    }; 
    const unreserve = async () => {
        useAppSpinnerStore().show('reserve');
        const reseration = appReservationSore().get;
        let id = null;
        if(reseration) id = reseration.id;
        const result = await consumer.destroy(id);

        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Unreserved',
                text: result.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message,
            });
        }
    }; 

    


    const props = defineProps({
        menu_id: {
            type: Number,
            required: true
        }
    });


</script>


<template>

        <button class="btn btn-outline-primary position-relative" @click="reservations">Reserve
            <Spinner v-if="useAppSpinnerStore().getStatus == 'reserve'" :trenspBackg="true" />
        </button>


</template>


<style scoped>
body {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; 
}





</style>