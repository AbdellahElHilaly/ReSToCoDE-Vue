<script setup>
import { ref, onMounted } from "vue";

const dateTime = ref(new Date().toLocaleString());

function updateDateTime() {
    setInterval(() => {
    dateTime.value = new Date().toLocaleString();
    }, 1000);
}

onMounted(updateDateTime);
</script>

<template>
<div class="error-container">
    <div class="error-message">
        <h1>404</h1>
        <p>Page Not Found</p>
    </div>
    <div class="additional-info">
        <p>Sorry, the page you are looking for could not be found.</p>
        <p class="date-time">{{ dateTime }}</p>
    </div>

    <RouterLink to="/">
    <button class="btn btn-primary">Go to Home</button>
    </RouterLink>
</div>
</template>

<style scoped>
.error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: Arial, sans-serif;
}

.error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 8rem;
    margin: 0;
    color: #2196F3;
}

p {
    font-size: 2rem;
    margin: 0;
}

.additional-info {
    margin-top: 2rem;
    text-align: center;
}

button {
    width: 200px;
    position: absolute;
    bottom: 5rem; 
    right: calc(50% - 100px);
}
</style>
