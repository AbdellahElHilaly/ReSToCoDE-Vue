<script setup>
    import { RouterLink } from "vue-router";

    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/Alert.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";


    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import { useAppAlertStore } from '@/store/appAlerStore.js'
    import { useAppUserStore } from '@/store/appUserStore.js'


    const authConsumer = new AuthConsumer();
    const user = useAppUserStore().getUser;
    


    const login = () => {
        useAppSpinnerStore().show("login");
        authConsumer
            .login(user)
            .then((responce) => {
                
                useAppSpinnerStore().hide();
                useAppAlertStore().show("login" , responce.message);
            })
            .catch((error) => {
                console.log(error);
            });
        };


</script>

<template>


<section>

    <FormeVue >
            <template #alert>
                <Alert v-if="useAppAlertStore().getStatus == 'login'" />
            </template>
            <template #spinner>
                <Spinner v-if="useAppSpinnerStore().getStatus == 'login'" :trenspBackg="true" />
            </template>

            <template #title>
                <h1>Login</h1>
            </template>

            <template #form>
                
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email"  autocomplete="email" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" autocomplete="current-password" v-model="user.password">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
                
            </template>

            <template #footer>
                <div class="forget-signup-container">
                    <p class="mt-2"> <RouterLink to="/signup">Sign Up</RouterLink></p>
                    <p class="mt-2"><RouterLink to="/reset">Forget Password</RouterLink></p>
                </div>
            </template>


        

    </FormeVue>


</section>


</template>

<style scoped>



section {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/images/image-activation.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
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


.forget-signup-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.forget-signup-container p {
    margin: 0;
}






.hide {
    display: none;
}

.show {
    display: flex;
    justify-content: center;
    align-items: center;
}






</style>
