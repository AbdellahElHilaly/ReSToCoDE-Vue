<script setup>

    import { ref, onMounted ,reactive } from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import { appMealStore } from '@/store/appMealStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'


    const consumer = new Consumer('mealsmenus');
    const consumer_meal = new Consumer('meals');

    const meals = ref([]);
    const mealForm = reactive({
        meal_id: '',
        quantity: '',
        menu: '',
        menu_id: '',
    });

    const addMeal = async () => {

        mealForm.menu_id = appMenuStore().get.id;
        useAppSpinnerStore().show('addMealMeanu');

        const result = await consumer.store(Helper.saveFormData(mealForm));
        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Meal Added',
                text: result.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message,
            });
        }
    };

    onMounted(async () => {
        const result = await consumer_meal.index();
        meals.value = appMealStore().getAll;
    });

</script>



<template>

    <section v-if="appMenuStore().get">

        <div class="forme-container">
            <div class="forme-header">
                <p class="title">Add meal to Menu</p>
                <button class="btn btn-info" @click="addMeal">Add</button>
            </div>
            <div class="forme-body position-relative">
                <Spinner v-if="useAppSpinnerStore().getStatus == 'addMealMeanu'" :trenspBackg="true" />
                <div class="d-flex justify-content-between">

                    <div class="input-container">
                        <label for="">Select Meal</label>
                        <select class="form-control" v-model="mealForm.meal_id">
                            <option v-for="meal in meals" :value="meal.id">{{meal.name}}</option>
                        </select>
                        
                    </div>
                    <div class="input-container">
                        <label for="">Quantity</label>
                        <input type="number" class="form-control" max="120" v-model="mealForm.quantity">
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="input-container">
                        <label for="">Menu</label>
                        <input type="text" class="form-control" :value="appMenuStore().get.name" disabled>
                    </div>
                </div>
            </div>
        </div>




    </section>

</template>



<style scoped>

section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
}

.forme-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #2C58A0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}

.forme-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C58A0;
    border-radius: 10px 10px 0 0;
    padding: 6px;
}

.forme-header .title {
    color: #fff;
    margin: auto 0;
    font-size: 1.5rem;
}
.forme-header button {
    margin: auto 0;
    font-size: .9rem;
    padding: 7px 20px;
}

.forme-body {
    width: 100%;
    height: 100%;
    padding: 5px;
    color: #2C58A0;
}

.forme-body .input-container {
    width: 100%;
    margin : 5px 3px;
}

.forme-body .input-container label {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.forme-body .input-container input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

@media screen and (max-width: 768px) {
    .forme-body {
        grid-template-columns: 1fr;
    }
}




</style>

