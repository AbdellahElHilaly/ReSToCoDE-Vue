<script setup>
    import AppHeader from '@/components/Layouts/HeaderVue.vue'
    import MealVue from '@/components/landingpage/MealVue.vue'
    import Menus from "@/components/landingpage/Menus.vue";

</script>


<template>
    <div class="app">
        <AppHeader />
        <MealVue />
        <Menus />
    </div>
</template>

<style scoped>
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