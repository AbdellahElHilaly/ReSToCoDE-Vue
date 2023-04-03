
<script setup>
    import { ref, onMounted } from "vue";
    import { RouterLink } from "vue-router";


    import ActivationCode from "@/Api/models/ActivationCode.js";
    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/AlertVue.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";


    const alertContainer = ref(null);
    const spinnerContainer = ref(null);

    const code = ref(new ActivationCode());
    const authConsumer = new AuthConsumer();

    const alertMessage = ref(null);
    const alertType = ref("info");
    const alertVisibility  = ref("hide");
    const routVisibility  = ref(false);

    const user = ref(null);
    user.value = JSON.parse(localStorage.getItem("user-redy-to-activate"));


    const activat = () => {

        loadSpinner();

        authConsumer
            .activateAccount(code.value)
            .then((responce) => {
                hideSpinner();
                if(responce.errors)  alertType.value = "error";
                else{
                    if(responce.Header.status) {
                        if(responce.message.includes("Account activated successfully")){
                            alertType.value = "success";
                            localStorage.removeItem("user-redy-to-activate");
                            routVisibility.value = true;
                        }
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


    const resend = () => {

        loadSpinner();

        authConsumer
            .resendActivationMail(user.value)
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
                    <RouterLink to="/">
                        <button class="btn btn-primary">Login</button>
                    </RouterLink>
            </template>
            </Alert>
        </div>

        <div class="spinner-container hide" >
            <Spinner />
        </div>

        <div class="activation-form">
            <div class="activation-title">
                <!-- check is user e -->
                <h2 class="title" v-if="user">Welcome {{user.name}}</h2>
                <h2 class="title" v-else>Welcome</h2>
                <p class="message">Enter the activation code sent to your email</p>
                <div class="resend-container">
                    <p class="message">Didn't receive the code?</p>
                    <i class="icon-resend fas fa-redo" @click="resend"></i>
                </div>
            </div>
            <form >
                <div class="form-group">
                    <label for="left">left code</label>
                    <input type="number" class="form-control" authocomplete="left" v-model="code.left">
                </div>
                <div class="form-group">
                    <label for="right">right code</label>
                    <input type="number" class="form-control"  autocomplete="right" v-model="code.right">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="activat" >Submit</button>
            </form>

            
        </div>
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
