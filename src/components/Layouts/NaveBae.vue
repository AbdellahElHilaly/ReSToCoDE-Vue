<script setup>
    import { onMounted, ref , reactive} from 'vue';
    import { RouterLink } from 'vue-router';
    import { AUTH_TOKEN } from '@/Api/Config/config.js';
    import AuthConsumer from '@/Api/Services/AuthConsumer.js';

    const authConsumer = new AuthConsumer();

    const isLoading = reactive({})


    const startLoading = (elt) => (isLoading[elt] = true);

    const isLogged = () => {
        return localStorage.getItem(AUTH_TOKEN) !== null;
    };

    const isAdmin = async () => {
        const role = await authConsumer.getRole();
        return role === 'admin';
    };

    const isAdminUser = ref(false);

    onMounted(async () => {
        isAdminUser.value = await isAdmin();
    });


    
    
</script>


<template>

    <nav class="navbar navbar-expand-lg ">
        
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="#">ReSToCoDE</a>
            </div>
            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Meals">Meals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Menus">Menus</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>

                <div class="d-flex auth" v-if="!isLogged()">
                    <router-link to="/login" @click="startLoading('snin')">
                        <i v-if="!isLoading['snin']" class="fas fa-user me-2"></i>
                        <i v-else class="fas fa-circle-notch me-2 spin"></i>
                        
                        <span>Log in</span>
                    </router-link>

                    <router-link to="/signup" @click="startLoading('snup')">
                        <i v-if="!isLoading['snup']" class="fas fa-user me-2"></i>
                        <i v-else class="fas fa-circle-notch me-2 spin"></i>
                        <span>Sign up</span>
                    </router-link>
                    
                </div>

                <div class="d-flex auth" v-else>
                    <router-link @click="startLoading('dash')" to="/dashboard" class="rout-dashboard" v-if="isAdminUser">
                        <i v-if="!isLoading['dash']" class="fas fa-tachometer-alt me-2"></i>
                        <i v-else class="fas fa-circle-notch me-2 spin"></i>
                        <span>Dashboard</span>
                    </router-link>

                    <router-link to="/profile" @click="startLoading('prof')">
                        <i v-if="!isLoading['prof']" class="fas fa-user me-2"></i>
                        <i v-else class="fas fa-circle-notch me-2 spin"></i>
                        <span>Profile</span>
                    </router-link>
                </div>  
            </div>

            


            
        </div>
    </nav>

</template>


<style scoped> 

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #000000;
}



.navbar-brand {
    color: orange;
    box-shadow : 0 0 5px orange
}


.navbar .nav-link {
    color: #f5f5f5;
    border-bottom: 2px solid transparent; 
    }

.navbar .nav-link:hover {
    border-bottom : 2px solid orangered;
}

.navbar .nav-link:active {
    color:orangered;
}

.navbar i{
    font-family: 'Font Awesome 5 Free';
    color: #f5f5f5;
}

.navbar .auth {
    color: #f5f5f5;
    border-bottom: 2px solid transparent; 
}

.navbar .auth a {
    color: #f5f5f5;
    border-bottom: 2px solid transparent; 
    margin-right: 20px;
}

/* last chile wodoute margin */

.navbar .auth a:last-child {
    margin-right: 0;
}


.navbar .auth i{
    font-family: 'Font Awesome 5 Free';
    color: orange;
}

.navbar .auth .rout-dashboard i{
    color: #00d0ff;
}

.spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 992px) {
    .navbar {
        position: relative;
    }
}

</style>