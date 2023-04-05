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
      <h1>500</h1>
      <div class="worm-loader mb-3"></div>
      <p>Internal Server Error</p>
    </div>
    <div class="additional-info">
      <p>Sorry for the inconvenience. Our team is working to fix the issue.</p>
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

.worm-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #2196F3;
  border-bottom-color: #008cff;
  animation: worm-spin 1s ease-in-out infinite;
}

@keyframes worm-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
