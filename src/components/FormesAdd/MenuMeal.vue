<script setup>
    
    import { ref, onMounted ,reactive} from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import PivoteForme from '@/components/FormesAdd/Pivote.vue';
    import MenuShow from '@/components/Show/Menu.vue';


    const consumer = new Consumer('menus');
    const tempMenuData = reactive(new Object());
    const menuData = reactive(new Object());
    const isAdded = ref(false);

    const addMenu = async () => {
        useAppSpinnerStore().show('addMenu');
        const result = await consumer.store(Helper.saveFormData(tempMenuData));
        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Menu Added',
                text: result.message,
            });
            isAdded.value = true;
            Helper.copyObject(appMenuStore().get, menuData);
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
                        <input type="text" class="form-control" v-model="tempMenuData.name">
                    </div>
                    <div class="input-container">
                        <label for="">Description</label>
                        <textarea type="text" class="form-control" v-model="tempMenuData.description"></textarea>
                    </div>
                </div>
                <div class="reight-container">
                    <div class="input-container">
                        <label for="">Quantity</label>
                        <input type="number" class="form-control" max="120" v-model="tempMenuData.quantity">
                    </div>
                    <div class="input-container">
                        <label for="">Dtae</label>
                        <input type="date" class="form-control" v-model="tempMenuData.date">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <MenuShow v-if="isAdded" :menu="menuData"/>
    
    <PivoteForme v-if="isAdded" />
    
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


@media screen and (max-width: 768px) {
    .forme-body {
        grid-template-columns: 1fr;
    }
}




</style>

