<script setup>
    import AppHeader from '@/components/Layouts/HeaderVue.vue'
    import MealVue from '@/components/landingpage/MealVue.vue'
    import Menus from "@/components/landingpage/Menus.vue";
    import Map from "@/components/landingpage/MapVue.vue";
    import Footer from "@/components/Layouts/FooterVue.vue";
    import Connection from "@/Api/Test/Connection.js";
    Connection.test();

</script>


<template>
    <div class="app">
        <AppHeader />
        <MealVue />
        <Menus />
        <Map />
        <Footer />

    </div>
</template>

<style scoped>
  *{
    font-family: 'Montserrat', sans-serif;
    color: #f5f5f5;
}


i{
    font-family: 'Font Awesome 5 Free'
}
.app {
    height: 100vh;
    overflow-y: scroll;
}

/* Style the scrollbar */
.app::-webkit-scrollbar {
    width: 3px;
    background-color: black;
}
.app::-webkit-scrollbar-thumb {
    background-color: orangered;
    border-radius: 10px;
}

</style>