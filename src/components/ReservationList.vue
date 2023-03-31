<script setup>
import PlatSelected from '@/components/PlatSelected.vue'

</script>

<template>

    <div class="reservation-list" id="Reservation">

        <div class="container-fluid">
            <h2 class="reservation-title">Reservations</h2>

            <div class="list-container">

                
                <PlatSelected v-for="item in 5"/>
                
                
            </div>

            <button class="btn-submit">Submit</button>

        </div>



        

        
        
    </div>
</template>

<style scoped>




.reservation-list {
    background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    padding: 8rem 0;
}

.reservation-title {
    text-align: center;
    color: orange;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: 'Roboto', sans-serif;
    margin: 2rem 0;
}



.container-fluid {
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 2rem 0;
}

.list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 1rem;
    grid-auto-rows: minmax(100px, auto);
    grid-auto-flow: dense;
    overflow: auto;
    border-radius: 0.5rem;
    width: 70vw;
    margin: 0 auto;

}



.btn-submit {
    background-color: orange;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 2rem auto;
    display: block;
    cursor: pointer;
}

.btn-submit:hover {
    background-color: #ff8c00;
}

.btn-submit:active {
    background-color: #ff8c00;
    transform: scale(0.95);
}


@media only screen and (max-width: 768px) {
    .container-fluid {
        width: 95vw;
        padding: 0.5rem 0;
    }
    .list-container {
        margin: 0 auto;
        width: 100%;
    }
}


</style>