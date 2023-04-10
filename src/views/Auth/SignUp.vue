<script setup>

    import { RouterLink } from "vue-router";
    import { ref, onMounted } from "vue";

    import User from "@/Api/models/User.js";

    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/Alert.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";


    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import { useAppAlertStore } from '@/store/appAlerStore.js'


    const authConsumer = new AuthConsumer();
    const user = ref(new User());
    


    const signUp = () => {

        useAppSpinnerStore().show("register");
        authConsumer
            .signUp(user.value)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("register" , responce.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };

</script>

<template>
    <section>
        
        <FormeVue >
            <template #alert>
                <Alert v-if="useAppAlertStore().getStatus == 'register'" />
            </template>
            <template #spinner>
                <Spinner v-if="useAppSpinnerStore().getStatus == 'register'" :trenspBackg="true" />
            </template>

            <template #title>
                <h1>Sign Up</h1>
            </template>

            <template #form>
                <div class="form-group">
                    <label for="name">full name</label>
                    <input type="text" class="form-control" authocomplete="name" v-model=user.name>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" autocomplete="email" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control"   autocomplete="current-password" v-model="user.password">
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" class="form-control"  autocomplete="current-password" v-model="user.password_confirmation">
                </div>

                <button type="submit" class="btn btn-primary" @click.prevent="signUp" >Login</button>
            </template>

            <template #footer>
                <p class="mt-2">Already have an account? <RouterLink to="/login">Log In</RouterLink></p>
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

.spinner-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    
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
