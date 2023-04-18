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
    <section>
        <div class="error-container">
        <div class="error-message">
            <div class="code-container">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
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
    </section>
    
</template>

<style scoped>

section{
    height: 100vh;
    width: 100%;
    background-color: black;
    color: white;
}
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

.code-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.code-container span {
    margin: 0 0.5rem;
    animation: move-y 1s ease-in-out infinite alternate;
}

@keyframes move-y {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-0.5rem);
    }
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
