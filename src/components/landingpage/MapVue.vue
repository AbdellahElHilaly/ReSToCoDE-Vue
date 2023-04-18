<script setup></script>

<template>
    <section>
        <div id="map-container-google-3" class="z-depth-1-half map-container-3">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.282444534896!2d-8.521648685202706!3d32.24746458078271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaefdd4fcbbdbc1%3A0x846cbd9f328a7bdb!2sYoucode!5e0!3m2!1sen!2sma!4v1650281673613!5m2!1sen!2sma" 
                frameborder="0" class="map"
                style="border:0" allowfullscreen>
            </iframe>
        </div>
    </section>
    

</template>

<style scoped>

@import 'animate.css';

section {
    background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}

.map-container-3 {
    height: 500px;
    position: relative;
}

.map-container-3 .map {
    position: absolute;
    width: 100%;
    height: 100%;
}




















</style>