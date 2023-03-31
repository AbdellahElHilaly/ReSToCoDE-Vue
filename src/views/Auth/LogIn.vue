<script setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue'
    import Alert from '@/components/Layouts/AlertVue.vue'

    const email = ref('')
    const password = ref('')

    
    const showAlert = ref(false)


    const login = () => {

    const alertElement = document.querySelector(".alert");
    alertElement.classList.remove("fadeOut");
    alertElement.classList.remove("hide");
    alertElement.classList.add("show");
        
    }

</script>

<template>


<section>
    
    <div class="alert-container" >
        <Alert type="error" > 
            <p>test</p>
        </Alert>
    </div>


    <div class="login-form">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" autocomplete="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" autocomplete="current-password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
        </form>

        <p class="mt-2">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>
    </div>

</section>


</template>

<style scoped>


.alert-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
section {
    width: 100vw;
    height: 100vh;
    background-image: url('https://cw33.com/wp-content/uploads/sites/8/2022/04/asian-restaurant.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
}     

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button[type="submit"] {
    width: 100%;
}
</style>
