<script setup>
    
    import { ref, onMounted ,reactive} from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'

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

    <section class="menu-forme">
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
</template>