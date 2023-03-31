<script setup>
    import MenuCard from '@/components/MenuCard.vue'
</script>


<template>

    <div class="Menu">
        <h2 id="Menu" class="menue-title">the menue for today</h2>
        <div class="menue-container">
            <div v-for="item in 10" :key="item" class="menu-item">
                <MenuCard />
            </div>
        </div>
    </div>

</template>

<style scoped>

.Menu {
    background-color: black;
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

.menue-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(100px, auto);
    grid-auto-flow: dense;
    overflow: auto;
    background-color: black;
    border-radius: 0.5rem;
}

.menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 768px) {
    .menue-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (min-width: 1024px) {
    .menue-container {
        grid-template-columns: repeat(3, 1fr);
    }
    .Menu {
        padding: 0 2rem;
    }
}



</style>
