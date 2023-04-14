<script setup>
    import { ref, onMounted } from "vue";
    const rating = ref(0);
    function update(value) {
        rating.value = value;
    }
    const colors = ref(["#b1b0a2", "#b1b0a2", "#b1b0a2", "#b1b0a2", "#b1b0a2"]);
    function changeColors(value) {
        colors.value = colors.value.map((color, index) => {
            return index < value ? "#f90" : "#b1b0a2";
        });
    }
    const animateClick = ref(false);
    function setAnimate() {
        animateClick.value = true;
        setTimeout(() => {
            animateClick.value = false;
        }, 200);
    }
</script>

<template>
    <div class="text-center mb-4 ">
        <h2 class="fw-bold mb-4 ">Customer Feedback</h2>
        <div class="feedback d-flex align-items-center justify-content-center mb-3">
            <div class="me-3">
            <h3 class="fw-bold">56</h3>
            <div class="text-secondary">Avg. Rating</div>
            </div>
            <div>
            <h3 class="fw-bold">78</h3>
            <div class="text-secondary">Total Feedback</div>
            </div>
        </div>
        <div class="rating">
            <i :class="{ 'far fa-star animate': animateClick, 'fas fa-star': !animateClick }"
                :style="{ color: colors[0] }" @click="update(1); changeColors(1); setAnimate()"></i>
            <i :class="{ 'far fa-star animate': animateClick, 'fas fa-star': !animateClick }"
                :style="{ color: colors[1] }" @click="update(2); changeColors(2); setAnimate()"></i>
            <i :class="{ 'far fa-star animate': animateClick, 'fas fa-star': !animateClick }"
                :style="{ color: colors[2] }" @click="update(3); changeColors(3); setAnimate()"></i>
            <i :class="{ 'far fa-star animate': animateClick, 'fas fa-star': !animateClick }"
                :style="{ color: colors[3] }" @click="update(4); changeColors(4); setAnimate()"></i>
            <i :class="{ 'far fa-star animate': animateClick, 'fas fa-star': !animateClick }"
                :style="{ color: colors[4] }" @click="update(5); changeColors(5); setAnimate()"></i>
        </div>
    </div>
</template>

<style scoped>
.feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
}

.rating {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
}

.rating i {
    font-size: 2rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
}

.animate {
    animation: animate 0.2s ease-in-out;
}

@keyframes animate {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

</style>
