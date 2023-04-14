<script setup>
import 'animate.css';
import { RouterView } from 'vue-router'
import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
import Spinner from "@/components/Layouts/SpinnerView.vue";
import Testter from "@/Api/Services/Testter.js";


Testter.connection();

</script>

<template>
    <Spinner v-if=" useAppSpinnerStore().getStatus == 'server'" :trenspBackg="false" />
    <RouterView />
</template>


<style scoped>
@import 'animate.css';
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>

