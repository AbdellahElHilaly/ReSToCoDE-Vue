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
                <div class="d-flex" v-for="(menu, index) in menus" :key="index">
                    <Menu :menu="menu" >{{ index + 1 }}</Menu>
                    <div class="between" v-if="index < menus.length - 1"></div>
                </div>
            </div>
            <div class="body" v-else>
                <Menu />
                <div class="between"></div>
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


.Menus {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 5rem;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.between {
    width: 1px;
    height: 100%;
    background-color: orange;
    margin: 0 1rem;
    flex-shrink: 0;
}


@media only screen and (max-width: 1024px) {
    .body {
        flex-direction: column;
    }

    .between {
        display: none;
    }

    .Menus {
        padding-left: 0;
        padding-right: 0;
    }
}







</style>