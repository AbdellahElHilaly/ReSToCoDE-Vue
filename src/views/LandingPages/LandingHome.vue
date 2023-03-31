<script setup>
    import AppHeader from '@/components/Layouts/HeaderVue.vue'
    import AppMenu from '@/components/MenueVue.vue'
    import ReservationList from "@/components/ReservationList.vue";
</script>


<template>
    <div class="app">
        <AppHeader />
        <AppMenu />
        <ReservationList />
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