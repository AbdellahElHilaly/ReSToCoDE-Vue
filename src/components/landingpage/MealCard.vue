<script setup>


</script>

<template>
    <div class="card text-white">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="http://127.0.0.1:8000/media/images/64357e22b2552.jpg" class="img-fluid"/>
        <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div class="d-flex justify-content-between">
            <p class="card-text">salad</p>
            <p class="card-text">27</p>
        </div>
    </div>
</div>
    
</template>




<style scoped>
.card {
    background-color: black;
    margin:0  3rem;
}





@media screen and (max-width: 992px) {
    .card {
        margin:0  2px;
    }
}

@media screen and (max-width: 768px) {
    .card {
        margin:0  2px;
    }
}

@media screen and (max-width: 576px) {
    .card {
        margin:0  2px;
    }
    
}









</style>