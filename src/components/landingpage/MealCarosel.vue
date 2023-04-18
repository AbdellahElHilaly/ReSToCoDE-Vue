<script setup>

import { ref, onMounted } from 'vue';
import MealCard from '@/components/landingpage/MealCard.vue';
import { appMealStore } from '@/store/appMealStore.js';
import Consumer from '@/Api/Services/Consumer.js';

const consumer = new Consumer('meals');

const meals = ref([]);

const getMeals = async () => {
    await consumer.index();
    meals.value = appMealStore().getAll;
};

onMounted(() => {
    getMeals();
});

</script>




<template>
    <section>
    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">

        <div class="carousel-indicators">

            <button
                v-for="(meal, index) in meals"
                type="button"
                :key="index"
                :data-mdb-target="'#carouselExampleIndicators'"
                :data-mdb-slide-to="index"
                :class="{ active: index === 0 }"
            ></button>

        </div>
        <div class="carousel-inner" v-if="meals.length > 0">
            <div v-for="(meal, index) in meals" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
                <div class="row">
                    <div class="col-md-4" v-for="(item, i) in 3" :key="i">
                        <MealCard :meal="meals[(index + i) % meals.length]" />
                    </div>
                </div>
            </div>
        </div>


        <div class="carousel-inner" v-else>
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-4">
                        <MealCard />
                    </div>
                    <div class="col-md-4">
                        <MealCard />
                    </div>
                    <div class="col-md-4">
                        <MealCard />
                    </div>
                </div>
            </div>
        </div>

        <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="prev"
        >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="next"
        >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
    </section>
</template>



<style scoped>
section {
    background-color: black;
}
</style>
