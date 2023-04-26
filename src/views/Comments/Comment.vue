<script setup>
    import { reactive, onMounted } from 'vue';
    import { appMenuStore } from '@/store/appMenuStore';
    import Menu from "@/components/Show/MenueBanner.vue";
    import Comment from "@/components/Show/Comment.vue";
    import CommentForme from "@/components/FormesAdd/Comment.vue";
    import { useRoute } from 'vue-router';
    import Consumer from '@/Api/Services/Consumer.js';
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";

    const route = useRoute();
    const id = route.params.id;

    const consumer = new Consumer('menus');

    const menu = reactive({});

    onMounted(async () => {
        if(appMenuStore().get)
            Helper.copyObject(appMenuStore().get, menu);
        else{
            await consumer.show(id);
            Helper.copyObject(appMenuStore().get, menu);
        }
    });


</script>

<template>

    <section v-if="menu.id" class="comments-page">
        <Menu :menu="menu" class="mb-2" />
        <div class="comments-container">
            <Comment v-for="comment in appMenuStore().get.comments" :comment="comment" :key="comment.id" />
        </div>
        <div class="new-comment">
            <CommentForme/>
        </div>

    </section>

    <section v-else class="comments-page loading">
        <Spinner :trenspBackg="false" />
    </section>
</template>



<style scoped>

.comments-page {
    background-color: black;
    min-height: 100vh;
}
.comments-container {
    overflow-y: scroll;
    height: calc(100vh -  250px);
}

.comments-container::-webkit-scrollbar {
    width: 3px;
    background-color: black;
}
.comments-container::-webkit-scrollbar-thumb {
    background-color: orangered;
    border-radius: 10px;
}


.menu-loading {
    position: relative;
}

</style>