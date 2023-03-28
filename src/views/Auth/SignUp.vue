<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <div class="sign-uo-form">
            <h2>Sign Up</h2>
            <form>
                <div class="form-group">
                    <label for="name">full name</label>
                    <input type="text" class="form-control" >
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" >
                </div>

                <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" class="form-control" >
                </div>
                <button type="submit" class="btn btn-primary" >Login</button>

            </form>

            <p class="mt-2">Already have an account? <RouterLink to="/login">Log In</RouterLink></p>


            
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100vw;
    height: 100vh;
    background-image: url('https://cw33.com/wp-content/uploads/sites/8/2022/04/asian-restaurant.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-uo-form {
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




</style>
