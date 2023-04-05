
<script setup>
    import { RouterLink } from "vue-router";
    import { ref, onMounted } from "vue";

    import User from "@/Api/models/User.js";
    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/AlertVue.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";


    const alertContainer = ref(null);
    const spinnerContainer = ref(null);

    const user = ref(new User());
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



    const signUp = () => {

        loadSpinner();

        authConsumer
            .signUp(user.value)
            .then((responce) => {
                hideSpinner();
                if(responce.errors)
                    alertType.value = "error";
                else{
                    alertType.value = "warning";
                    user.value.id = responce.Body.id;
                }

                if(localStorage.getItem("user-redy-to-activate")){
                    localStorage.removeItem("user-redy-to-activate");
                    localStorage.setItem("user-redy-to-activate", JSON.stringify(user.value));
                }
                else{
                    localStorage.setItem("user-redy-to-activate", JSON.stringify(user.value));
                }

                console.log(localStorage.getItem("user-redy-to-activate"));

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
        loadSpinner();
    });




</script>

<template>
    <section>

        <Alert :visibility="alertVisibility"  :type="alertType" >
            <template #message>
                {{alertMessage}}
            </template>
            <template #link v-if="alertType == 'warning'">
                <RouterLink to="activate">
                    <button class="btn btn-primary">Activate</button>
                </RouterLink>
            </template>
            
        </Alert>

        <div class="spinner-container hide" >
            <Spinner />
        </div>

        
        <FormeVue v-if="serverConected">
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
