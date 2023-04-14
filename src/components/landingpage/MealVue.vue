<script setup>
    import MealCarosel from '@/components/landingpage/MealCarosel.vue'
</script>


<template>

    <div class="Meals">
        <h2 id="Meals" class="menue-title">our meals for today</h2>
        <div class="carsel-container">
            <MealCarosel />
        </div>
    </div>

</template>

<style scoped>


.Meals {
    /* background-color: black; */
    background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');

}

.menue-title {
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 60px;
    color: orange;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: 'Roboto', sans-serif;
}

.carsel-container {
    padding-top: 2rem;
    padding-bottom: 7rem;
}




@media only screen and (min-width: 768px) {

    
}

@media only screen and (min-width: 1024px) {
    
}



</style>
