
<script setup>
    import { RouterLink } from "vue-router";
    import { ref, onMounted } from "vue";

    import User from "@/Api/models/User.js";
    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/AlertVue.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";

    const alertContainer = ref(null);
    const spinnerContainer = ref(null);

    const user = ref(new User());
    const authConsumer = new AuthConsumer();

    
    const alertMessage = ref(null);


    


    const singUp = () => {

        loadSpinner();
        // hideAlert();

        authConsumer
            .signUp(user.value)
            .then((responce) => {
                hideSpinner();
                loadAlert(responce.message);
            })
            .catch((error) => {
                hideSpinner();
                loadAlert(error.message);
            });

            /*

            what is chaining here?

            response : 
            chatshing is a way to call a function after another function has been called

            translate arabic : 

            الشيكينج هو طريقة للتعامل مع الدالة بعد انتهاء الدالة الاولى

            

            */
            
    };



    



    function loadAlert(message) {
        alertMessage.value = message;
        alertContainer.value.classList.remove("hide");
        alertContainer.value.classList.add("show");
    }

        

    function hideAlert() {
        alertContainer.value.classList.add("fadeOut");
        setTimeout(() => {
            alertContainer.value.classList.remove("show");
            alertContainer.value.classList.add("hide");
        }, 500);
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


            <Alert type="error">
                <p>{{ alertMessage }}</p>
            </Alert>
        </div>
        <div class="spinner-container hide" >
            <Spinner />
        </div>

        <div class="sign-up-form">
            <h2>Sign Up</h2>
            <form >
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
                    <label for="password">Password</label>
                    <input type="password" class="form-control"   autocomplete="current-password" v-model="user.password_confirmation">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="singUp" >Login</button>
            </form>

            <p class="mt-2">Already have an account? <RouterLink to="/login">Log In</RouterLink></p>

            
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

.sign-up-form {
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
