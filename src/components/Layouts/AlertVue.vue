<script setup>
import { computed, ref } from 'vue';



const props = defineProps({
    type: {
        type: String,
        default: 'info',
    },
    dismissable: {
        type: Boolean,
        default: true,
    },


    
    
});

const alertClasses = computed(() => {
    return {
        'alert-success': props.type === 'success',
        'alert-danger': props.type === 'error',
        'alert-info': props.type === 'info',
        'alert-warning': props.type === 'warning',
    };
});

const dismissed = ref(false);

const dismiss = () => {
    const alertElement = document.querySelector(".alert");
    alertElement.classList.add("fadeOut");
    setTimeout(() => {

        alertElement.classList.remove("show");
        alertElement.classList.add("hide");
        
    }, 500);
};


</script>

<template>
    <div class="alert hide " :class="alertClasses" >
        <slot></slot>
        <button  class="close" @click="dismiss"> 
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>




<style scoped>

.alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    animation: fadeIn 0.5s ease;
}

.alert-success {
    background-color: #28a745;
    border-color: #28a745;
}

.alert-danger {
    background-color: #dc3545;
    border-color: #dc3545;
}

.alert-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.alert-warning {
    background-color: #ffc107;
    border-color: #ffc107;
}

.close {
    padding: 0;
    color: #fff;
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
}

.close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
}

.close:focus {
    outline: 0;
}


@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.alert.fadeOut {
    animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}

/* add 2 classes for show and not show alert  */

.alert.show {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.alert.hide {
    display: none;
}








</style>


