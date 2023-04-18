<script setup>

  import AppNave from '@/components/Layouts/NaveBae.vue'

</script>


<template>
  
    <header>

      <AppNave/>

      <!-- Background image -->
      <div
        id="intro-example"
        class="p-5 text-center bg-image"
        style="background-image: url('https://cw33.com/wp-content/uploads/sites/8/2022/04/asian-restaurant.jpg');"
      >
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.7);">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">ReSToCoDE</h1>
              <h5 class="mb-4">
                Time Resing for reserve your table 
                <span>35:76</span>
              </h5> 
              

              <button
                class="btn btn-outline-light btn-lg m-2"
                href=""
                role="button"
                rel="nofollow"
                target="_blank"
              >
                <!-- icone food -->
                <i class="fas fa-utensils me-2"></i>
                Reseve Now
            </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Background image -->
  </header>
</template>


<style scoped>

  *{
    font-family: 'Montserrat', sans-serif;
    color: #f5f5f5;
  }

  i{
    font-family: 'Font Awesome 5 Free'
  }

  #intro-example{
    height:calc(100vh - 2px); 
  }


  /* responsive  */

  @media (max-width: 992px) {
    
  #intro-example{
    height:calc(50vh - 60px ); 
  }

  }

</style>