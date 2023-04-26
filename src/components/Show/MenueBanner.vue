<script setup>

    import { reactive, ref , onMounted } from 'vue';
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';
    import { appMenuStore } from '@/store/appMenuStore.js'


    const props = defineProps({
        menu: {
            type: Object,
            required: false
        }
    });

</script>

<template>
    <section class="w-100 m-0  p-0 text-start">
        <div class="banner">
            <div class="image">
                <img :src="menu.image" class="img-fluid" />
            </div>
            
            <div class="content">
                <div class="general">
                <div class="name">{{ menu.name }}</div>
                <div class="reservation">
                    Reservation <span>{{ appMenuStore().get.statistics.reservations }}</span>
                </div>
                <div class="date">{{ menu.date }}
                    <router-link  to="/" class="return">
                        <i class="return fas fa-house"></i>
                    </router-link>
                </div>
            </div>

            <div class="statistique-container">
                <div class="comments">
                    <p class="title">Comments</p>
                    <div class="ms-1">
                        <div class="number">
                        <i class="far fa-comments"></i>
                        Number of comments <span>{{ appMenuStore().get.statistics.comments }}</span>
                    </div>
                    <div class="average">
                        <i class="fas fa-star"></i>
                        Average <span>{{ appMenuStore().get.statistics.commentsAverage }}</span>%
                    </div>
                    <div class="last">
                        <i class="far fa-comment"></i>
                        Last comment <span>{{ appMenuStore().get.statistics.lastComment }}</span>
                    </div>
                    </div>
                </div>
                <div class="feedback">
                    <div class="title d-flex ">Feedback
                        <span class="ms-3">{{ appMenuStore().get.statistics.feedback }}</span>
                    </div> 
                    <div class="ms-1">
                        <div class="number">
                        <i class="far fa-thumbs-up"></i>
                        Number of feedback <span>{{ appMenuStore().get.statistics.feedbacks }}</span>
                    </div>
                    <div class="average">
                        <i class="fas fa-star"></i>
                        Average <span>{{ appMenuStore().get.statistics.feedbacksAverage }}</span>%
                    </div>
                    <div class="last">
                        <i class="far fa-comment"></i>
                        Last feedback <span>{{ appMenuStore().get.statistics.lastFeedback }}</span>
                    </div>
                    </div>
                    
                </div>
            </div>

            </div>

        
        </div>
    </section>
</template>

<style scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");

.banner {
    position: relative;
    width: 100%;
    height: 180px;
    display: flex;
    overflow: hidden;
    border-bottom: 1px solid #ffcc00;
    background-image: url("https://watermark.lovepik.com/photo/40016/7315.jpg_wh1200.jpg");
}

.return {
    color: rgb(255, 255, 255);
    margin-left: 10px;
    cursor: pointer;
}



.banner span {
    color: #ffcc00;
    font-weight: bold;
    margin: 0 5px;
}

.image {
    position: relative;
    width: 33%;
    height: 100%;
    padding: 10px;
    overflow: hidden;
    border: 1px solid #ffcc00;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    flex: 1;
    flex-direction: column;
    padding: 10px;
    color: #fff;
    background-color: #04040035;
}

.general {
    display: flex;
    justify-content: space-between;
}

.statistique-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 70%;
}

.statistique-container .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.statistique-container i {
    margin-right: 5px;
    color: #ffcc00;
}

.comments div,
.feedback div{
    margin-bottom: 5px;
}


</style>