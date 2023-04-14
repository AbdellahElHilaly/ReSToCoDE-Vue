<script setup>
    import MenuCard from "@/components/landingpage/MenuMealCard.vue";
    import Rating from "@/components/landingpage/RatingVue.vue";
    import { onMounted , ref } from "vue";





</script>



<template>
    
    <section class="menu">
        <div class="menu-titel">
            <h1>Menu 1</h1>
        </div>
        <div class="menu-header container-fluid  py-5 ">
            <div class="row">
                <div class="col-lg-6">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <div class="text-center mb-4">
                            <h1 class="fw-bold mb-3">Menu Name</h1>
                            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <button class="btn btn-primary me-3">Réserver maintenant</button>
                            <button class="btn btn-outline-primary">Ajouter un commentaire</button>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <p class="me-2 mb-0">Votre code:</p>
                            <h5 class="fw-bold mb-0">you code</h5>
                        </div>
                    </div>
                </div>
                <div class="image-container col-lg-6">
                    <img src="http://127.0.0.1:8000/media/images/64357e22b2552.jpg" class="w-100" alt="">
                </div>
            </div>
        </div>
        <div class="menu-body container-fluid">
            <Rating/>
            <div class="menu-body row justify-content-center mt-4">
                <MenuCard v-for="item in 6" :key="item" class="col-lg-2 col-md-4 mb-2"/>
            </div>
        </div>

    </section>
</template>
<style scoped>
@import 'animate.css';



@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


section {
    color: white;
    border: 1px solid white;
}

.menu {
    background-color: black;
    border-radius: 0.5rem;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.menu-titel {
    text-align: center;
    padding: 1rem;
    background-color: black;
}

.menu-header {
    background-color: orange;
}

.menu-body {
    background-color: black;
}

.image-container img {
    border: 5px solid white;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 0 0 0 50px;
}



</style> 