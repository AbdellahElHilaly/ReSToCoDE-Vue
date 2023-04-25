<script setup>

    import { defineProps } from 'vue';

    const props = defineProps({
        meal: {
            type: Object,
            required: false
        }
    });

</script>



<template>

    <section class="meal-show">
        
        <div class="card-container">
            
            <div class="card-head">
                <div class="name-container">
                    <h2>{{ meal.name }}</h2>
                </div>
                <div class="image-container">
                    <img :src="meal.image" alt="meal image">
                </div>
            </div>
            <div class="card-body">
                <div class="category-container">
                    <p>Category:</p>
                    <p>{{meal.category }}</p>
                </div>
                <div class="quantity-container">
                    <p>Quantity:</p>
                    <p>{{ meal.quantity }}</p>
                </div>
            </div>

            <div class="card-footer">
                <div class="description-container">
                    <p>Description:</p>
                    <p>{{ meal.description }} </p>
                </div>
            </div>
        </div>

    </section>

</template>


<style scoped>

section.meal-show {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 32%;
}

.card-container {
    width: 100%;
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f2f2f2;
}

.card-head .name-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-head .name-container h2 {
    margin: 0;
}

.card-head .image-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
}

.card-head .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
}

.category-container, .quantity-container {
    flex: 1;
    display: flex;
    align-items: center;
}

.category-container p:first-child, .quantity-container p:first-child {
    margin-right: 10px;
    font-weight: bold;
}

.card-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #f2f2f2;
}

.description-container p:first-child {
    margin-right: 10px;
    font-weight: bold;
}

</style>
