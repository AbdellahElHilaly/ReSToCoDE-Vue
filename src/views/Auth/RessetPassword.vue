
<script setup>
    import { ref, onMounted } from "vue";
    import { RouterLink } from "vue-router";


    import AuthConsumer from "@/Api/Services/AuthConsumer.js";
    import RessetModel from "@/Api/models/RessetModel.js";

    
    import Alert from "@/components/Layouts/AlertVue.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";


    const alertContainer = ref(null);
    const spinnerContainer = ref(null);

    const authConsumer = new AuthConsumer();

    const serverConected = ref(false)
    authConsumer.testServer()
            .then((responce) => {
                hideSpinner();
                serverConected.value = true;
            });

    const alertMessage = ref(null);
    const alertType = ref("info");
    const alertVisibility  = ref("hide");
    const routVisibility  = ref(false);

    const email_exist = ref(false);

    const ressetModel= ref(new RessetModel());





    const forgotPassword = () =>{
        loadSpinner();

        authConsumer
            .forgotPassword(ressetModel.value)
            .then((responce) => {
                hideSpinner();
                if(responce.errors)  alertType.value = "error";
                else{
                    if(responce.Header.status) {
                        alertType.value = "success";
                        email_exist.value = true;
                        ressetModel.value.name = responce.Body;
                    }
                    else   alertType.value = "warning";
                }
                loadAlert(responce.message);
            })
            .catch((error) => {
                hideSpinner();
                alertType.value = "error";
                loadAlert(error.message);
            });

    }

    const resetPassword = () =>{
        loadSpinner();

        authConsumer
            .ressetPassword(ressetModel.value)
            .then((responce) => {
                hideSpinner();
                if(responce.errors)  alertType.value = "error";
                else{
                    if(responce.Header.status) {
                        alertType.value = "success";
                        email_exist.value = true;
                        routVisibility.value = true;
                    }
                    else    alertType.value = "warning";
                }
                loadAlert(responce.message);
            })
            .catch((error) => {
                hideSpinner();
                alertType.value = "error";
                loadAlert(error.message);
            });
        
    }



    const resend = () => {

        loadSpinner();

        authConsumer
            .resendActivationMail(ressetModel.value)
            .then((responce) => {
                hideSpinner();
                if(responce.errors)  alertType.value = "error";
                else{
                    if(responce.Header.status) {
                        alertType.value = "success";
                    }
                    else    alertType.value = "warning";
                }
                loadAlert(responce.message);
            })
            .catch((error) => {
                hideSpinner();
                alertType.value = "error";
                loadAlert(error.message);
            });
    };



    



    function loadAlert(message) {
        alertMessage.value = message;
        alertContainer.value.classList.remove("hide");
        alertContainer.value.classList.remove("fadeOut");
        alertContainer.value.classList.add("show");
        alertVisibility.value = "show";
    }




    function hideSpinner() {
        spinnerContainer.value.classList.remove("show");
        spinnerContainer.value.classList.add("hide");
    }

    function loadSpinner() {
        spinnerContainer.value.classList.remove("hide");
        spinnerContainer.value.classList.add("show");
    }

    onMounted(() => {
        alertContainer.value = document.querySelector(".alert");
        spinnerContainer.value = document.querySelector(".spinner-container");
        hideSpinner();
    });





</script>

<template>
    <section>

        <div class="alert-container" >
            <Alert :visibility="alertVisibility"  :type="alertType" >
                <template #message>
                    {{alertMessage}}
                </template>
                <template #link v-if="routVisibility">
                    <RouterLink to="/login">
                        <button class="btn btn-primary">Login</button>
                    </RouterLink>
                </template>
            </Alert>
        </div>

        <div class="spinner-container hide" >
            <Spinner />
        </div>

        <FormeVue  v-if="serverConected">
            <template #title>
                <div class="activation-title">
                <h2 class="title" v-if="ressetModel">Welcome {{ressetModel.name}}</h2>
                <h2 class="title" v-else>Welcome</h2>
                <p class="message" v-if="!email_exist">Please enter your email address to receive a password reset code</p>
                <p class="message" v-else>Please enter the code we sent to your email address</p>
                <div class="resend-container">
                    <p class="message">Didn't receive the code?</p>
                    <i class="icon-resend fas fa-redo" @click="resend"></i>
                </div>
            </div>
            </template>


            <template #form>
                <div v-if="!email_exist" class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" autocomplete="email" v-model="ressetModel.email">
                </div>

                <div v-if="email_exist" class="form-group">
                    <label for="left">left code</label>
                    <input type="number" class="form-control" authocomplete="left" v-model="ressetModel.left">
                </div>
                <div v-if="email_exist" class="form-group">
                    <label for="right">right code</label>
                    <input type="number" class="form-control"  autocomplete="right" v-model="ressetModel.right">
                </div>
                <div v-if="email_exist" class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control"   autocomplete="current-password" v-model="ressetModel.password">
                </div>

                <div v-if="email_exist" class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" class="form-control"  autocomplete="current-password" v-model="ressetModel.password_confirmation">
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
