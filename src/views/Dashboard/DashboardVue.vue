<script setup>


import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
import NavBar from '@/components/dashboard/NavBar.vue';
import GraphVue from '@/components/dashboard/GraphVue.vue';
import PlatsPerformance from '@/components/dashboard/PlatsPerformance.vue';
import NewStatistic from '@/components/dashboard/NewStatistic.vue';
import TotalStatistic from '@/components/dashboard/TotalStatistic.vue';

import MealTabel from './Tabels/Meals.vue';
import MenuTabel from './Tabels/Menus.vue';



</script>



<template>

    <header>
        <SidebarMenu />
        <NavBar />
    </header>

    <main style="margin-top: 58px">
        <div class="container pt-4">
            <!-- <GraphVue />
            <PlatsPerformance />
            <MealTabel />
            <MenuTabel/>
            <NewStatistic />
            <TotalStatistic /> -->

            <MealTabel />
            <MenuTabel />
        </div>
    </main>

</template>




<style scoped>

@media (min-width: 991.98px) {
    main {
        padding-left: 240px;
    }
}

</style>