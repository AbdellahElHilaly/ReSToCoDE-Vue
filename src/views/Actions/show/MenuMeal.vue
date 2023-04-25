<script setup>
    import { reactive , onMounted } from 'vue';
    import MenuShow from '@/components/Show/Menu.vue';
    import MealShow from '@/components/Show/Meal.vue';
    import { useRoute } from 'vue-router';
    import Consumer from '@/Api/Services/Consumer.js';
    import Helper from '@/Helpers/Helper.js';

    const route = useRoute();
    const id = route.params.id;

    const consumer = new Consumer('menus');

    const menu = reactive({});


    onMounted(async () => {
        const result = await consumer.show(id);
        Helper.copyObject(result, menu);
    });

    const meal = reactive({
        name: 'Meal Name',
        quantity: 'Meal Description',
    });


</script>

<template>

    <MenuShow  :menu="menu" />
    <div class="meal-list">
        <MealShow v-for="meal in menu.meals" :meal="meal" :key="meal.id" />
    </div>




</template>


<style scoped>

    .meal-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }




</style>