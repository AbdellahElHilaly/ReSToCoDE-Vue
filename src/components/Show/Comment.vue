<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    comment: {
        type: Object,
        required: false
    }
});
</script>


<template>

    <section>
        <div class="comment-container btn">
            <div class="profile-comment-container">
                <div class="profile">
                    <p>{{ comment.user[0] }}</p> 
                </div>
                <div class="comment-body">
                    <p>{{ comment.body }}</p>
                </div>
            </div>
            <div class="info-container">
                <div class="name">
                    <p>{{ comment.user }}</p>
                </div>
                <div class="comment-date">
                    <p>{{ comment.date }}</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2px;
    }

    .comment-container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid orange;
        background-color: #5d5d56;
        width: 100%;
        min-height: 80px;
        padding: 5px 10px;
    }

    .profile-comment-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: orange;
        border: 2px solid #2C58A0;
        display: flex;
        align-items: center;
    }

    .profile p {
        text-transform: uppercase;
        margin: auto;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
        color: white;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        margin-right: 10px;
    }


    .info-container .comment-date {
        margin-bottom: 1px;
    }

    .info-container .name p, .info-container .comment-date p {
        margin: 0;
    }

    .info-container .name p {
        font-size: 1.3rem;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    .info-container .comment-date p {
        font-size: 1rem;
        color: yellow;
        font-family: 'Roboto', sans-serif;
    }

    .comment-body {
        padding: 10px; 
        margin-left: 10px;
    }

    .comment-body p {
        font-size: 1rem;
        margin: 0;
        color: white;
        
    }

</style>