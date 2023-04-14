<script setup>

</script>

<template>
    <div class="card text-white">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="http://127.0.0.1:8000/media/images/64357e22b2552.jpg" class="img-fluid"/>
        <a href="#!">
            <div class="mask"></div>
        </a>
    </div>
    <div class="card-body  d-flex  justify-content-between align-items-end">
        <p class="title"> Card title</p>
        <p class="category">salad</p>
    </div>
</div>
    
</template>




<style scoped>
.card {
    background-color:black;
    width: 30%;
    border: 1px solid #fff;
    padding: 2px;
    border-radius: 0;
    margin: 3px 5px;
}
.card .card-body {
    padding-top: 1.5rem;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.card .card-body .title {
    font-size: 1.2rem;
    font-weight: bold;
}

.card .card-body .category {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
}




.mask {
    background-color: rgba(251, 251, 251, 0.15);
}

.bg-image {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.mask {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}





@media screen and (max-width: 992px) {
    .card {
        margin:0  2px;
        font-size: 0.8rem;
    }
    .card .card-body .title {
        font-size: 1rem;
    }
    .card .card-body .category {
        font-size: 0.6rem;
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