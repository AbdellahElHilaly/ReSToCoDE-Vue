<script setup>

    import { defineProps } from 'vue';

    const props = defineProps({
        menu_id: {
            type: Number,
            required: true
        }
    });


</script>


<template>

<button class="btn btn-outline-primary">Comment</button>

</template>


<style scoped>



</style>