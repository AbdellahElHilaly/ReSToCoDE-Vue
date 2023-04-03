<script setup>

    import { ref } from 'vue';
    import AuthConsumer from '@/Api/Services/AuthConsumer.js';

    const profile = ref(null);
    const authConsumer = new AuthConsumer();

    const fetchProfile = async () => {
        const response = await authConsumer.getProfile();
        profile.value = response.Body;
        console.log(profile.value);
    };

    fetchProfile();
    const isEdit = ref(false);

</script>


<template>
    <section>
        <div class="user-profile">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Image">

            <div class="hed-container"> 
                <h2 class="forme-title">User Profile</h2> 
                <i class="icon-edit fas fa-user-edit" @click="isEdit = !isEdit"></i>
            </div>
            <div class="form-group">
                <label for="name">Full Name:</label>
                <span v-if = "!isEdit">
                    <span v-if="profile">{{ profile.name }}</span>
                    <i v-else class="fas fa-spinner fa-spin"></i>
                </span>
                <input v-else type="text" name="name" id="name" placeholder="Full Name" class="form-control" >
            </div>
            <div class="form-group">
                <label for="email">Email Address:</label>
                <span v-if = "!isEdit">
                    <span v-if="profile">{{ profile.email }}</span>
                    <i v-else class="fas fa-spinner fa-spin"></i>
                </span>
                <input v-else type="email" name="email" id="email" placeholder="Email Address" class="form-control" >
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <span v-if = "!isEdit">
                    <span v-if="profile">**********</span>
                    <i v-else class="fas fa-spinner fa-spin"></i>
                </span>
                <input v-else type="password" name="password" id="password" placeholder="Password" class="form-control" >
            </div>

            <div class="form-group">
                <label for="role">Role:</label>
                <span >
                    <span v-if="profile">{{ profile.role }}</span>
                    <i v-else class="fas fa-spinner fa-spin"></i>
                </span>
            </div>


            <button  class="btn btn-primary" >Update Profile</button>
        </div>
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
    background-image: url('../../assets/images/image-globale.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}





.hed-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.forme-title {
    font-size: 2em;
    font-weight: 700;
}

.icon-edit {
    font-size: 1.5rem;
    border: 2px solid orange;
    border-radius: 50%;
    color: rgb(2, 107, 254);
    padding: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    

}

.icon-edit:hover {
    color: orange;
    border: 2px solid rgb(2, 107, 254);
}

.icon-edit:active {
    color: orange;
    border: 2px solid rgb(2, 107, 254);
    font-size: 1.6rem;
}





.user-profile {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
}

.user-profile img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

</style>