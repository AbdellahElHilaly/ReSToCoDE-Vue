<script setup>
    import { reactive , onMounted } from 'vue';
    import MenuEdite from '@/components/FormesEdite/Menu.vue';
    import MealEdite from '@/components/FormesEdite/Meal.vue';
    import { useRoute } from 'vue-router';
    import Consumer from '@/Api/Services/Consumer.js';
    import Helper from '@/Helpers/Helper.js';
    import { appMenuStore } from '@/store/appMenuStore.js'; 
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import Spinner from "@/components/Layouts/SpinnerView.vue";

    const route = useRoute();
    const id = route.params.id;

    const consumer = new Consumer('menus');

    const menu = reactive({});


    onMounted(async () => {
        await consumer.show(id);
        console.log(appMenuStore().get)
    });

    const meal = reactive({
        name: 'Meal Name',
        quantity: 'Meal Description',
    });


</script>

<template>
    <section v-if="appMenuStore().get">
        <MenuEdite  :menuEdite="appMenuStore().get" />
        <div class="meal-list" >
            <MealEdite v-for="meal in appMenuStore().get.meals" :meal="meal" :key="meal.id" />
        </div> 
    </section>
    <section v-else class="position-relative speaner-container">
        <Spinner :transparent="false"/>
    </section>

</template>


<style scoped>

.speaner-container{
    height: 85vh;
}


.meal-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}




</style>