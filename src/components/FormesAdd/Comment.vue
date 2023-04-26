<script setup>
import { reactive, onMounted, ref } from 'vue';
import AuthConsumer from '@/Api/Services/AuthConsumer.js';
import Consumer from '@/Api/Services/Consumer.js';
import { useAppUserStore } from '@/store/appUserStore.js'
import { appMenuStore } from '@/store/appMenuStore.js'
import Helper from '@/Helpers/Helper.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;


const commentConsumer = new Consumer('comments');
const authConsumer = new AuthConsumer();
const menuConsumer = new Consumer('menus');

const commentData = reactive({
    menu_id: id,
    body: '',
});
const isSending = ref(false);

const userName = ref('');


const fetchProfile = async () => {
    if(useAppUserStore().getUser.name == ''){
        const response = await authConsumer.getProfile();
        useAppUserStore().setUser(response.Body);
    }
    userName.value = useAppUserStore().getUser.name;
};




const addComment = async () => {
    isSending.value = true;
    const result = await commentConsumer.store(Helper.saveFormData(commentData)); 
    if (result.status) {
        await menuConsumer.show(id);
    }
    isSending.value = false;
};



onMounted(() => {
    fetchProfile();
});

</script>


<template>



    <section>
        <div class="comment-container">
            <div class="profile">
                <p>{{ userName[0] }}</p> 
            </div>
            <div class="image" v-if="isSending">
                <img src="@/assets/images/imageGif.gif" alt="imageGif" v-for="n in 5" :key="n">
            </div>
            <div class="comment-body" v-if="!isSending">
                <input type="text" placeholder="Add a comment..." v-model="commentData.body"  @keydown.enter="addComment">
            </div>
            <div class="spacer" v-if="isSending"></div>
            <div class="submit" v-if="!isSending">
                <i class="fas fa-paper-plane" @click="addComment"></i>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.comment-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid orange;
    background-color: black;
    padding: 5px 10px;
    width: 100%;
    height: 60px;
    margin-top: 2px;
}
/* image gif have birds flying */
.image {
    height:100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    height:100%;
}

.profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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

.comment-body {
    padding: 5px;
    width: 80%;
}

.comment-body input {
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-family: 'Roboto', sans-serif;
    width: 100%;
}

.spacer {
    flex-grow: 1;
}

.submit {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.submit i {
    color: white;
    font-size: 1.6rem;
}




</style>
