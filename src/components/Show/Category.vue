

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="badge-container">
        <p class="badge" :class="category">{{ category }}</p>
    </div>
</template>



<style scoped>

.badge-container {
    display: flex;
    justify-content: center;
    align-items: center;
}


.badge {
    margin: auto;
    display: inline-block;
    border-radius: 9999px;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    color: #060124;
    width: 70px;
}


.main-meal {
    background-color: #f56565;
}

.bread {
    background-color: #ed8936;
}

.salad {
    background-color: #48bb78;
}

.appetizer {
    background-color: #4299e1;
}

.dessert {
    background-color: #9f7aea;
}

.water {
    background-color: #a0aec0;
}











</style>