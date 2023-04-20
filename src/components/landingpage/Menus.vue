<script setup>

import { ref, onMounted } from 'vue';
import { appMenuStore } from '@/store/appMenuStore.js';
import Consumer from '@/Api/Services/Consumer.js';
import Menu from "@/components/landingpage/Menu.vue";


const consumer = new Consumer('menus');

const menus = ref([]);

const getMeals = async () => {
    await consumer.index();
    menus.value = appMenuStore().getAll
};

onMounted(() => {
    getMeals();
});

</script>

<template>

    <section>
        <div class="Menus">
            <div class="title-container">
                <h2 id="Menus" class="menue-title">the menues for today</h2>
            </div>
            <div class="body" v-if="menus.length > 0">
                <div class="w-100" v-for="(menu, index) in menus" :key="index">
                    <Menu class="menu" :menu="menu" >{{ index + 1 }}</Menu>
                </div>
            </div>

            <div class="body" v-else>
                <Menu />
                <Menu />
            </div>
        </div>
    </section>
        
</template>




<style scoped>

@import 'animate.css';

section {
    background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}



.title-container {
    padding: 5rem 0;
}

.menue-title {
    text-align: center;
    color: orange;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: 'Roboto', sans-serif;
}





.body {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    
}

.menu {
    width: 95%;
    margin: 10px auto;
}




@media only screen and (max-width: 1024px) {
    .body {
        grid-template-columns: repeat(1, 1fr);
    }

    .menu {
        width: 99%;
    }

}







</style>