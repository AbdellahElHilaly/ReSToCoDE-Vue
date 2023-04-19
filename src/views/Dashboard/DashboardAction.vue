<script setup>

import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
import NavBar from '@/components/dashboard/NavBar.vue';
import MenuAction from '@/views/Actions/Menu.vue';
import { useRoute } from 'vue-router';

const route = useRoute();


</script>



<template>

    <header>
        <SidebarMenu />
        <NavBar />
    </header>

    <main style="margin-top: 58px">
        <div class="container pt-4">
            <MenuAction v-if="route.params.model == 'menu'" />
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