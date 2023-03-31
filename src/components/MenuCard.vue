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

                <button class="btn-reserve" @click="reserve">Reserve</button>

                <div class="d-flex">
                    <span class="icone-info">
                        <i class="fas fa-info-circle "></i>
                    </span>
                    <span class="icone-reserv">
                        <i class="fas fa-utensils " :class="{selected: reserved}"></i>
                    </span>
                </div>

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
    background-color: orangered;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
}

.btn-reserve:hover {
    background-color: rgb(221, 65, 8);
}

.btn-reserve:active {
    background-color: orangered;
    box-shadow: 0 0 0.5rem 0.5rem #ff8c00;
    transform: translateY(4px);
}


.selected {
    color: orangered;
}

.icone-info {
    color: white;
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

.icone-info:hover {
    transform: scale(1.2);
}

.icone-info:active {
    color: orangered;
}



.icone-reserv {
    color: white;
    font-size: 1.5rem;
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









</style>