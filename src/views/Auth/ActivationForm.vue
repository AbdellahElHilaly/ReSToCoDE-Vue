<script setup>

    import { RouterLink } from "vue-router";
    import { ref, onMounted } from "vue";

    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/Alert.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";

    import { useAppUserStore } from '@/store/appUserStore.js'
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import { useAppAlertStore } from '@/store/appAlerStore.js'


    const authConsumer = new AuthConsumer();
    let user = useAppUserStore().getUser;
    console.log(user);
    



    const activat = () => {

        useAppSpinnerStore().show("activation");

        authConsumer
            .activateAccount(user)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("activation" , responce.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const resend = () => {
        useAppSpinnerStore().show("activation");
        authConsumer
            .resendActivationMail(user)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("activation" , responce.message);
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
                <Alert v-if="useAppAlertStore().getStatus == 'activation'" />
            </template>
            <template #spinner>
                <Spinner v-if="useAppSpinnerStore().getStatus == 'activation'" :trenspBackg="true" />
            </template>

            <template #title>
                <div class="activation-title">
                <!-- check is user e -->
                <h2 class="title" v-if="user">Welcome {{user.name}}</h2>
                <h2 class="title" v-else>Welcome</h2>
                <p class="message">Enter the activation code sent to your email</p>
                <div class="resend-container" v-if="user.email">
                    <p class="message">Didn't receive the code?</p>
                    <i class="icon-resend fas fa-redo" @click="resend"></i>
                </div>
            </div>
            </template>

            <template #form>
                <div class="form-group">
                    <label for="left">left code</label>
                    <input type="number" class="form-control" authocomplete="left" v-model="user.left">
                </div>
                <div class="form-group">
                    <label for="right">right code</label>
                    <input type="number" class="form-control"  autocomplete="right" v-model="user.right">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="activat" >Submit</button>
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

.activation-form {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.activation-title {
    text-align: center;
    margin-bottom: 20px;
}

.activation-title h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}

.activation-title p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: start;
}

.activation-title .resend-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.activation-title .resend-container p {
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
}

.icon-resend {
    font-size: 20px;
    color: #007bff;
    cursor: pointer;
}

.icon-resend:hover {
    color: #0056b3;
}

.icon-resend:active {
    color: #003d7e;
    font-size: 24px;
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
