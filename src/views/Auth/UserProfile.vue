<script setup>
    
    import { ref, onMounted } from "vue";


    import User from "@/Api/models/User.js";
    import AuthConsumer from "@/Api/Services/AuthConsumer.js";

    import Alert from "@/components/Layouts/AlertVue.vue";
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import FormeVue from "@/components/Layouts/FormeVue.vue";

    import {AUTH_TOKEN} from '@/Api/Config/config.js';

    const alertContainer = ref(null);
    const spinnerContainer = ref(null);

    const profile = ref(null);

    const authConsumer = new AuthConsumer();
    const user = ref(new User());

    const alertMessage = ref(null);
    const alertType = ref("info");
    const alertVisibility  = ref("hide");

    authConsumer.testServer()
            .then((responce) => {
                hideSpinner();
                serverConected.value = true;
            });

    const fetchProfile = async () => {
        const response = await authConsumer.getProfile();
        profile.value = response.Body;
        user.value.email = profile.value.email;
        user.value.id = profile.value.id;
    };


    fetchProfile();
    const isEdit = ref(false);

    const updateProfile = async () => {
        //check if the password and password confirmation empty if yes remove them from the user object
        if(user.value.password == "" && user.value.password_confirmation == ""){
            delete user.value.password;
            delete user.value.password_confirmation;
        }
        loadSpinner();
        authConsumer
            .editProfile(user.value)
            .then((responce) => {

                hideSpinner();

                if(responce.errors){
                    alertType.value = "error";
                }
                else{
                    
                    if(responce.Header.status) {
                        alertType.value = "success";
                        user.value.id = responce.Body.id;
                        const token = responce.Body.token;
                        localStorage.setItem(AUTH_TOKEN, token);
                        fetchProfile();
                        isEdit.value = false;

                        user.value = new User();
                    }
                    else{
                        alertType.value = "error";
                    }
                }

                loadAlert(responce.message);
            })
            .catch((error) => {
                hideSpinner();
                alertType.value = "error";
                loadAlert(error.message);
            });
        
    };

    const logOut = () => {
        loadSpinner();
        authConsumer
            .logOut()
            .then((responce) => {

                hideSpinner();

                if(responce.errors){
                    alertType.value = "error";
                }
                else{
                    
                    if(responce.Header.status) {
                        alertType.value = "success";
                        localStorage.removeItem(AUTH_TOKEN);
                        //redirect to login page after 1 second
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 1000);
                    }
                    else{
                        alertType.value = "error";
                    }
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
        loadSpinner();
    });


</script>


<template>
    
    <section>

        <Alert :visibility="alertVisibility"  :type="alertType" >
            <template #message>
                {{alertMessage}}
            </template>
        </Alert>

        <div class="spinner-container hide" >
            <Spinner />
        </div>


        <FormeVue>
            <template #title>
                <div class="hed-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Image">
                    <div class="text-icone-container"> 
                        <h2 class="forme-title">User Profile</h2> 
                        <div class="action-container">
                            <i class="action-icone  fas fa-user-edit" @click="isEdit = !isEdit"></i>
                            <i class="action-icone  fas fa-sign-out-alt" @click="logOut"></i>
                        </div>
                    </div>
                </div>
                
            </template>

            <template #form>
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <span v-if = "!isEdit">
                        <span v-if="profile">{{ profile.name }}</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-else type="text"  placeholder="Full Name" class="form-control"  v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <span v-if = "!isEdit">
                        <span v-if="profile">{{ profile.email }}</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-else type="email"  class="form-control" :value="profile.email" disabled>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <span v-if = "!isEdit">
                        <span v-if="profile">**********</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-if = "isEdit" type="password" placeholder="Current Password" class="form-control" v-model="user.current_password">
                </div>
                <div v-if = "isEdit" class="form-group">
                    <label for="password">new Password:</label>
                    <input type="password"  placeholder="new Password" class="form-control" v-model="user.password">
                </div>
                <div v-if = "isEdit" class="form-group">
                    <label for="password">Confirm:</label>
                    <input type="password"  placeholder="Confirm new Password" class="form-control" v-model="user.password_confirmation">
                </div>

                <div class="form-group">
                    <label for="role">Role:</label>
                    <span >
                        <span v-if="profile">{{ profile.role }}</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                </div>


                <button  v-if = "isEdit" class="btn btn-primary" @click.prevent="updateProfile">Update</button>
            </template>

            <template #footer>
            </template>

        </FormeVue>
    </section>
</template>


<style scoped>
*{
    font-family: 'Montserrat', sans-serif;
}
i{
    font-family: 'Font Awesome 5 Free';
}



section {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/images/image-activation.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hed-container{
    text-align: center;
}

.hed-container img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid orange;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

.text-icone-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-container{
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.action-icone {
    font-size: 1.5rem;
    border: 2px solid orange;
    border-radius: 50%;
    color: rgb(2, 107, 254);
    padding: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.action-icone:hover {
    color: orange;
    border: 2px solid rgb(2, 107, 254);
}

.action-icone:active {
    color: orange;
    border: 2px solid rgb(2, 107, 254);
    font-size: 1.6rem;
}


.form-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
}

.form-group span {
    font-weight: 500;
}

.form-group input {
    width: 70%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}

.form-group input:focus {
    border: 1px solid rgb(2, 107, 254);
}



button {
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