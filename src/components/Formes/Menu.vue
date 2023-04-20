<script setup>
    import { ref, onMounted ,reactive} from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import MealForme from '@/components/Formes/Meal.vue';


    const consumer = new Consumer('menus');
    const menuForm = reactive(new Object());
    const menuShow = reactive(new Object());
    const isAdded = ref(false);

    const addMenu = async () => {
        useAppSpinnerStore().show('addMenu');
        const result = await consumer.store(Helper.saveFormData(menuForm));
        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Menu Added',
                text: result.message,
            });
            isAdded.value = true;
            Helper.copyObject(appMenuStore().get, menuShow);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message,
            });
        }
    };

    
</script>



<template>

    <section class="menu-forme" v-if="!isAdded">
        <div class="forme-container">
            <div class="forme-header">
                <p class="title">Add Menu</p>
                <button class="btn btn-info" @click="addMenu">Add</button>
            </div>
            <div class="forme-body position-relative">
                <Spinner v-if="useAppSpinnerStore().getStatus == 'addMenu'" :trenspBackg="true" />
                <div class="left-container">

                    <div class="input-container">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="menuForm.name">
                    </div>
                    <div class="input-container">
                        <label for="">Description</label>
                        <textarea type="text" class="form-control" v-model="menuForm.description"></textarea>
                    </div>
                </div>
                <div class="reight-container">
                    <div class="input-container">
                        <label for="">Quantity</label>
                        <!-- max : 120 -->
                        <input type="number" class="form-control" max="120" v-model="menuForm.quantity">
                    </div>
                    <div class="input-container">
                        <label for="">Dtae</label>
                        <input type="date" class="form-control" v-model="menuForm.date">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="menu-show" v-if="isAdded && menuShow">
        <div class="card-container">

            <div class="header">
                <p class="menu-name">Menu Name</p>
                <span class="text-white">{{ menuShow.name }} </span>
            </div>

            <div class="body">
                <div class="mini-container">
                    <p class="menu-date">Menu Date</p>
                    <span class="text-black">{{ menuShow.date }}</span>
                </div>
                <div class="mini-container">
                    <p class="menu-quantity">Menu Quantity</p>
                    <span class="text-black">{{ menuShow.quantity }}</span>
                </div>
                <div class="mini-container">
                    <p class="menu-quantity">Meals Nmber</p>
                    <span class="text-black">{{menuShow.mealsNumber}}</span>
                </div>
            </div>

            <div class="footer">
                <p class="menu-description">Menu Description</p>
                <span  class="text-black">{{ menuShow.description }}</span>
            </div>  
        </div>
    </section>


    <MealForme v-if="isAdded" />
    
</template>



<style scoped>

section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    color: #2C58A0;
}

.forme-body .input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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

/* sow  */

.menu-show {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container {
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

.card-container .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C58A0;
    border-radius: 10px 10px 0 0;
    padding: 6px;
}

.card-container .header .menu-name {
    color: #fff;
    margin: auto 0;
    font-size: 1.5rem;
}

.card-container .body {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2C58A0;
}

.card-container .body .mini-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.card-container .body .mini-container .menu-date {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container .menu-quantity {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container .menu-mealsNumber {
    font-size: 1.2rem;
    margin-bottom: 2px;
}

.card-container .body .mini-container span {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.card-container .footer {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 6px;
}

.card-container .footer .menu-description {
    color: #2C58A0;
    width: fit-content;
    margin: auto;
    font-size: 1.5rem;
}

.card-container .footer span {
    color: #2C58A0;
    width: fit-content;
    margin: auto;
    font-size: 1.2rem;
}





















@media screen and (max-width: 768px) {
    .forme-body {
        grid-template-columns: 1fr;
    }
}




</style>

