<script setup>

    import { RouterLink } from "vue-router";
    import router from '@/router';
    import { ref , onMounted ,reactive} from "vue";

    import User from "@/Api/models/User.js";

    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/Alert.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";


    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import { useAppAlertStore } from '@/store/appAlerStore.js'
    import { useAppUserStore } from '@/store/appUserStore.js'


    const authConsumer = new AuthConsumer();
    const ressetUser = ref(new User());
    const forgorUser = reactive(useAppUserStore().getUser);

    const email_exist = ref(false);


    const forgotPassword = () =>{

        useAppSpinnerStore().show("ressetpassword");

        authConsumer
            .forgotPassword(forgorUser)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("ressetpassword" , responce.message);
                // ressetUser.value = useAppUserStore().getUser
                
                if(useAppUserStore().getUser.name != '')  email_exist.value = true;

                
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const resetPassword = () =>{
        ressetUser.value.email = useAppUserStore().getUser.email;
        useAppSpinnerStore().show("ressetpassword");
        authConsumer
            .ressetPassword(ressetUser.value)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("ressetpassword" , responce.message);
            })
            .catch((error) => {
                console.error(error);
            });
        
    }



    const resend = () => {
        useAppSpinnerStore().show("ressetpassword");
        const resendUser = useAppUserStore().getUser;
        authConsumer
            .resendActivationMail(resendUser)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("ressetpassword" , responce.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };




</script>

<template>
    <section>

        <FormeVue>
            <template #alert>
                <Alert v-if="useAppAlertStore().getStatus == 'ressetpassword'" />
            </template>
            <template #spinner>
                <Spinner v-if="useAppSpinnerStore().getStatus == 'ressetpassword'" :trenspBackg="true" />
            </template>

            <template #title>
                <div class="activation-title">
                <!-- check is user e -->
                <h2 class="title" >Welcome {{useAppUserStore().getUser.name}}</h2>
                <!-- <h2 class="title" v-if="!email_exist">Welcome</h2> -->
                <p class="message">Enter the activation code sent to your email</p>
                <div class="resend-container" v-if="email_exist">
                    <p class="message">Didn't receive the code?</p>
                    <i class="icon-resend fas fa-redo" @click="resend"></i>
                </div>
            </div>
            </template>


            <template #form>
                <div v-if="!email_exist" class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" autocomplete="email" v-model="forgorUser.email">
                </div>

                <div v-if="email_exist" class="form-group">
                    <label for="left">left code</label>
                    <input type="number" class="form-control" authocomplete="left" v-model="ressetUser.left">
                </div>
                <div v-if="email_exist" class="form-group">
                    <label for="right">right code</label>
                    <input type="number" class="form-control"  autocomplete="right" v-model="ressetUser.right">
                </div>
                <div v-if="email_exist" class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control"   autocomplete="current-password" v-model="ressetUser.password">
                </div>

                <div v-if="email_exist" class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" class="form-control"  autocomplete="current-password" v-model="ressetUser.password_confirmation">
                </div>
                
                <button v-if="!email_exist" type="submit" class="btn btn-primary" @click.prevent="forgotPassword">Send</button>
                <button v-if="email_exist" type="submit" class="btn btn-primary" @click.prevent="resetPassword">Reset</button>
            </template>

            <template #footer>
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
