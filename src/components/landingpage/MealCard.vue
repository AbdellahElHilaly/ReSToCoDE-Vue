<script setup>
const meals = defineProps({
    meal: {
        type: Object,
    },

})
</script>

<template>
    <div class="card text-white" v-if="meal">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="meal.image" class="img-fluid"/>
            <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
        </div>
        <div class="card-body" >
            <h5 class="card-title">{{ meal.name }}</h5>
            <div class="d-flex justify-content-between">
                <p class="card-text">{{ meal.category }}</p>
                <p class="card-text">{{ meal.quantity }}</p>
            </div>
        </div>
    </div>

    <div class="card text-white" v-else>
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://i.gifer.com/3iNK.gif" class="img-fluid"/>
            <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
        </div>
        <div class="card-body" >
            <h5 class="card-title">Loading...</h5>
            <div class="d-flex justify-content-between">
                <p class="card-text invisible">invisible</p>
                <p class="card-text invisible">invisible</p>
            </div>
        </div>
    </div>
    
    



    
</template>


<style scoped>
.card {
    background-color: black;
    margin: 0 3rem;
    padding: 2rem 0;
}

.card img {
    object-fit: cover;
    height: 200px;
    width: 100%;
}

@media screen and (max-width: 992px) {
    .card {
        margin: 0 2px;
    }
}

@media screen and (max-width: 768px) {
    .card {
        margin: 0 2px;
    }
}

@media screen and (max-width: 576px) {
    .card {
        margin: 0 2px;
    }
}

.invisible {
    visibility: hidden;
}

</style>
