<script setup>

    import { defineProps } from 'vue';
    import { appMenuStore } from '@/store/appMenuStore';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps({
        menu: {
            type: Object,
            required: true
        }
    });

    const  gotocomments = () => {
        appMenuStore().set(props.menu);
        router.push({ name: 'comments', params: { id: props.menu.id } });
    };

</script>


<template>

<button class="btn btn-outline-primary" @click="gotocomments">Comments</button>

</template>


<style scoped>



</style>