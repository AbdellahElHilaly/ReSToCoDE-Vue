<script setup>
import { ref } from 'vue';
import { Consumer } from '@/Api/services/Consumer.js';

const consumer = new Consumer('games');

const responce = ref(null);

const games = ref(null);
const header = ref(null);
const message = ref(null);
const error = ref(null);



async function fetchGames() {
    responce.value = await consumer.get();

    const Handler = new ResponceHandler(responce.value);

    games.value = Handler.getBody();
    message.value = Handler.getMessage();
    header.value = Handler.getHeader();

}



async function saveGame() {
    const newGame = {
        name: "test game 6cx7",
        category_id: 1, 
        developer_id: 1, 
        price: "60.00",
        quantity: 100,
        description: "A great football game",
    };

    const response = await consumer.storeGame(newGame);

    error.value = response.error;
    message.value = response.message;
    games.value = response.Body;
    message.value = response.message;
    header.value = response.Header;


}


// fetchGames();

</script>

<template>

    <h1 v-if="message">{{ message }}</h1>

    <p v-if="!games">Loading...</p>
    <div v-else>
        <pre>{{ games }}</pre>
    </div>
    <!-- store new game -->


    <button @click="saveGame">Add new game</button>
    
</template>
