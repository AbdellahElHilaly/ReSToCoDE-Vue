<script setup></script>

<template>

    <div class="item">
        <img class="item-image" src="http://127.0.0.1:8000/media/images/64357e22b2552.jpg" alt="">
        <p class="item-title">plat 1</p>
    </div>

</template>


<style scoped>


.item {
    background-color: black;
    border-radius: 0.5rem;
    width: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.item-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.item-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
}

</style>