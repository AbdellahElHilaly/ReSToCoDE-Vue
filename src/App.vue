<script setup>
import 'animate.css';
import { RouterView } from 'vue-router'
import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
import Spinner from "@/components/Layouts/SpinnerView.vue";


</script>

<template>
    <Spinner v-if=" useAppSpinnerStore().getStatus == 'server'" :trenspBackg="false" />
    <RouterView />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

i {
    font-family: 'Font Awesome 5 Free'
}


</style>

