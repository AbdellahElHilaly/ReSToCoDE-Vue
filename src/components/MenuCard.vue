<script setup>
import { ref } from 'vue'

const reserved = ref(false)

const reserve = () => {
    reserved.value = !reserved.value
}




</script>

<template>
    <div class="card">
        <img src="../assets/images/menue-item.jpg" class="card-img-top" alt="Fissure in Sandstone"/>
        <div class="card-body">
            <h5 class="card-title">fisch</h5>
            <p class="card-text">Plat principal </p>
            
            <div class="reserve">
                <!-- <button class="btn-reserve">Reserve</button>
                <span class="icone">
                    <i class="fas fa-check d-none"></i>
                    <i class="fas fa-times"></i>
                </span> -->

                <!-- change icone by click  -->

                <button class="btn-reserve" @click="reserve">Reserve</button>
                <span class="icone">
                    <i class="fas fa-check" v-if="reserved"></i>
                    <i class="fas fa-times" v-else></i>
                </span>

            </div>
        </div>
    </div>
</template>


<style scoped>
.card {
    background-color: black;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.5rem black;
    width: calc(25vw - 1.5rem);
    overflow: hidden;
    
}
.card-img-top {
    object-fit: cover;
    width: 100%;
    height: 100%;


}
.card-body {
    padding: 1rem;
    
}
.card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
}

.card-text {
    font-size: 1rem;
    color: white;
}

.reserve {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.btn-reserve {
    background-color: orange;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
}

.btn-reserve:hover {
    background-color: #ff8c00;
}

.btn-reserve:active {
    background-color: #ff8c00;
    box-shadow: 0 0 0.5rem 0.5rem #ff8c00;
}

.icone {
    color: white;
    font-size: 1.5rem;
}

.icone i {
    margin-left: 0.5rem;
}

.icone i:hover {
    color: orange;
}

.icone i:active {
    color: orange;
}









@media screen and (max-width: 992px) {
    .card {
        width: calc(50vw - 1.5rem);
    }
}

@media screen and (max-width: 768px) {
    .card {
        width: calc(100vw - 1.5rem);
    }
}

@media screen and (max-width: 576px) {
    
    
}

@media screen and (max-width: 1200px) {
    .card {
        width: calc(33.333vw - 1.5rem);
    }
}







</style>