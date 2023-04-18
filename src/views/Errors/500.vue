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
                  <span>5</span>
                  <span>0</span>
                  <span>0</span>
              </div>
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
  </section>
  
</template>

<style scoped>

section {
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
  bottom: 1rem; 
  right: calc(50% - 100px);
}
</style>
