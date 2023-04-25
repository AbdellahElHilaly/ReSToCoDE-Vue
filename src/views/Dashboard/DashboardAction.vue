<script setup>

import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
import NavBar from '@/components/dashboard/NavBar.vue';
import MenuAdd from '@/views/Actions/add/MenuMeal.vue';
import MenuShow from '@/views/Actions/show/MenuMeal.vue';
import MenuEdite from '@/views/Actions/edite/MenuMeal.vue';
import { useRoute } from 'vue-router';

const route = useRoute();


</script>



<template>
    <section>
        <header>
        <SidebarMenu />
            <NavBar />
        </header>

        <main style="margin-top: 58px">
            <div class="container pt-4">
                <MenuAdd v-if="route.params.model == 'menu' && route.params.action== 'add'" />
                <MenuShow v-if="route.params.model == 'menu' && route.params.action== 'show'" />
                <MenuEdite v-if="route.params.model == 'menu' && route.params.action== 'edite'" />
                
            </div>
        </main>
    </section>
    

</template>



<style scoped>

@media (min-width: 991.98px) {
    main {
        padding-left: 240px;
    }
}

</style>