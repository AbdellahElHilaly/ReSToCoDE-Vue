<script setup>
    import AppHeader from '@/components/HeaderVue.vue'
    import AppMenu from '@/components/MenueVue.vue'
</script>


<template>
    <div class="app">
        <AppHeader />
        <AppMenu />
    </div>
</template>

<style scoped>
.app {
    height: 100vh;
    overflow-y: scroll;
}

/* Style the scrollbar */
.app::-webkit-scrollbar {
    width: 3px;
    background-color: black;
}
.app::-webkit-scrollbar-thumb {
    background-color: orangered;
    border-radius: 10px;
}

</style>