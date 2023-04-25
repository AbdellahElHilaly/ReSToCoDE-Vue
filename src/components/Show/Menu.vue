<script setup>

    import { defineProps } from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js'; 

    const props = defineProps({
        menu: {
            type: Object,
            required: false
        }
    });

</script>



<template>

    <section class="menu-show">
        <div class="card-container">

            <div class="header">
                <p class="menu-name">Menu Name</p>
                <span class="text-white" v-if="menu.name">{{ menu.name }}</span>
                <span class="text-white" v-else>Loading...</span>
            </div>

            <div class="body">
                <div class="mini-container">
                    <p class="menu-date">Menu Date</p>
                    <span class="text-black" v-if="menu.date">{{ menu.date }}</span>
                    <span class="text-black" v-else>Loading...</span>
                </div>
                <div class="mini-container">
                    <p class="menu-quantity">Menu Quantity</p>
                    <span class="text-black" v-if="menu.quantity">{{ menu.quantity }}</span>
                    <span class="text-black" v-else>Loading...</span>
                </div>
                <div class="mini-container">
                    <p class="menu-quantity">Meals Nmber</p>
                    <span class="text-black" v-if="menu.mealsNumber || menu.mealsNumber===0 ">{{ appMenuStore().get.mealsNumber}}</span>
                    <span class="text-black" v-else>Loading...</span>
                </div>
            </div>

            <div class="footer">
                <p class="menu-description">Menu Description</p>
                <span  class="text-black" v-if="menu.description">{{ menu.description }}</span>
                <span  class="text-black" v-else>Loading...</span>
            </div>  
        </div>
    </section>


</template>


<style scoped>

section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-show {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #2C58A0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}

.card-container .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C58A0;
    border-radius: 10px 10px 0 0;
    padding: 6px;
}

.card-container .header .menu-name {
    color: #fff;
    margin: auto 0;
    font-size: 1.5rem;
}

.card-container .body {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2C58A0;
}

.card-container .body .mini-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.card-container .body .mini-container .menu-date {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container .menu-quantity {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container .menu-mealsNumber {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container span {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.card-container .footer {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 6px;
}

.card-container .footer .menu-description {
    color: #2C58A0;
    width: fit-content;
    margin: auto;
    font-size: 1.5rem;
}

.card-container .footer span {
    color: #2C58A0;
    width: fit-content;
    margin: auto;
    font-size: 1.2rem;
}


@media screen and (max-width: 768px) {
    .forme-body {
        grid-template-columns: 1fr;
    }
}




</style>

