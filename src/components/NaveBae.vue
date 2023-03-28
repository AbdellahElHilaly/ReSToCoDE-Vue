<script setup>

    import { RouterLink } from 'vue-router';

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
                        <a class="nav-link" href="#Menu">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>

                <div class="d-flex auth">
                    <router-link to="/login">
                        <i class="fas fa-user me-2"></i>
                        <span>Log in</span>
                    </router-link>

                    <router-link to="/signup">
                        <i class="fas fa-user me-2"></i>
                        <span>Sign up</span>
                    </router-link>
                    
                </div>
            </div>


            
        </div>
    </nav>

</template>


<style scoped> 

/* fix top */

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


@media (max-width: 992px) {
    .navbar {
        position: relative;
    }
}

</style>