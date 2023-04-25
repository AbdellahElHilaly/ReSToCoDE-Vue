<script setup>
    
    import { ref, defineProps ,reactive} from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import PivoteForme from '@/components/FormesAdd/Pivote.vue';
    import Swal from 'sweetalert2'
    import Helper from '@/Helpers/Helper.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'

    const consumer = new Consumer('menus');
    const is_added = ref(false)

    const props = defineProps({
        menuEdite: {
            type: Object,
            required: false
        }
    });


    const updateMenu = async () => {
        let data = Helper.filterObject(props.menuEdite , ['id', 'name', 'quantity', 'description', 'date']);
        const id = data.id;
        useAppSpinnerStore().show('updateMenu');
        const result = await consumer.update(id , Helper.saveFormData(data));
        useAppSpinnerStore().hide();
        if (result.status) {
            Swal.fire({
                icon: 'success',
                title: 'Menu Added',
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

</script>




<template>

    <section class="menu-forme">
        <div class="forme-container">
            <div class="forme-header">
                <p class="title">Update Menu</p>
                <button class="btn btn-info" @click="is_added=!is_added">AddMeal</button>
                <button class="btn btn-info" @click="updateMenu">Update</button>
            </div>
            <div class="forme-body position-relative">
                <Spinner v-if="useAppSpinnerStore().getStatus == 'updateMenu'" :trenspBackg="true" />
                <div class="left-container">

                    <div class="input-container">
                        <label for="">Name</label>
                        <input type="text" v-if="menuEdite.name" class="form-control" v-model="menuEdite.name">
                        <input type="text" v-else class="form-control" value="Loading..."/>

                    </div>
                    <div class="input-container">
                        <label for="">Description</label>
                        <textarea type="text" v-if="menuEdite.description" class="form-control" v-model="menuEdite.description"></textarea>
                        <textarea type="text" v-else class="form-control" >Loading...</textarea>
                    </div>
                </div>
                <div class="reight-container">
                    <div class="input-container">
                        <label for="">Quantity</label>
                        <input type="number" v-if="menuEdite.quantity" class="form-control" max="120" v-model="menuEdite.quantity">
                        <input type="text" v-else="menuEdite.quantity" class="form-control" max="120" value="Loading...">
                    </div>
                    <div class="input-container">
                        <label for="">Dtae</label>
                        <input type="date" v-if="menuEdite.date" class="form-control" v-model="menuEdite.date">
                        <input type="text" v-else="menuEdite.date" class="form-control" value="Loading...">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <PivoteForme v-if="is_added" />


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

