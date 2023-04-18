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
    const userProfile = ref(null);
    const userEdit = reactive(new User());

    const fetchProfile = async () => {
        if(useAppUserStore().getUser.name == ''){
            const response = await authConsumer.getProfile();
            useAppUserStore().setUser(response.Body);
        }
        userProfile.value = useAppUserStore().getUser
    };



    let isEdit = ref(false);

    const updateProfile = async () => {
        useAppSpinnerStore().show("profile");
        //check if the password and password confirmation empty if yes remove them from the user object
        if(userEdit.password == "" && userEdit.password_confirmation == ""){
            delete userEdit.password;
            delete userEdit.password_confirmation;
        }
        console.log(userEdit);
        
        authConsumer
            .editProfile(userEdit)
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("profile" , responce.message);
                userProfile.value = useAppUserStore().getUser
            })
            .catch((error) => {
                console.error(error);
            });
        
    };

    const logOut = () => {
        useAppSpinnerStore().show("profile");
        authConsumer
            .logOut()
            .then((responce) => {
                useAppSpinnerStore().hide();
                useAppAlertStore().show("profile" , responce.message);
                setTimeout(() => {
                    router.push('/login');
                }, 800);
            })
            .catch((error) => {
                console.error(error);
        });
    };

    onMounted(() => {
        fetchProfile();
    });


</script>


<template>
    
    <section>


        <FormeVue>

            <template #alert>
                <Alert v-if="useAppAlertStore().getStatus == 'profile'" />
            </template>
            <template #spinner>
                <Spinner v-if="useAppSpinnerStore().getStatus == 'profile'" :trenspBackg="true" />
            </template>

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
                        <span v-if="userProfile">{{ userProfile.name }}</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-else type="text"  placeholder="Full Name" class="form-control"  v-model="userEdit.name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <span v-if = "!isEdit">
                        <span v-if="userProfile">{{ userProfile.email }}</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-else type="email"  class="form-control" :value="userProfile.email" disabled>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <span v-if = "!isEdit">
                        <span v-if="userProfile">**********</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </span>
                    <input v-if = "isEdit" type="password" placeholder="Current Password" class="form-control" v-model="userEdit.current_password">
                </div>
                <div v-if = "isEdit" class="form-group">
                    <label for="password">new Password:</label>
                    <input type="password"  placeholder="new Password" class="form-control" v-model="userEdit.password">
                </div>
                <div v-if = "isEdit" class="form-group">
                    <label for="password">Confirm:</label>
                    <input type="password"  placeholder="Confirm new Password" class="form-control" v-model="userEdit.password_confirmation">
                </div>

                <div class="form-group">
                    <label for="role">Role:</label>
                    <span >
                        <span v-if="userProfile">{{ userProfile.role }}</span>
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