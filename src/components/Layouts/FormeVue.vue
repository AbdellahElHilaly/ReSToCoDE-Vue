<script setup>
        import { RouterLink } from "vue-router";

</script>

<template>

    <div class="form position-relative">
            <slot name="alert" class="alert"></slot>
            <slot name="spinner" class="spinner">

            </slot>
            <RouterLink to="/">
                <i class="x fas fa-times"></i>
            </RouterLink>
            <slot name="title" class="title"></slot>
            <form>
                <slot name="form" class="form"></slot>
            </form>
            <slot name="footer" class="footer"></slot>
        
    </div>
</template>


<style scoped>


.form{
    width: 480px;
    margin: 0 auto;
    padding:20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.x {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    border: 2px solid rgb(2, 107, 254);
    color: orange;
    padding: 5px;
}


.x:hover {
    color:  rgb(2, 107, 254);
    border: 0px;
    animation: rotate 0.5s linear 2;
}

.x:active {
    color: black;
    border: 0px;
    font-size: 1.6rem;
}

.title {
    font-size: 2em;
    font-weight: 700;
}

.form {
    margin-bottom: 20px;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


</style>