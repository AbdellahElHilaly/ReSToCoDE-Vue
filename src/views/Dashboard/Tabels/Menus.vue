<script setup>
    import { ref, onMounted ,reactive} from 'vue';
    import { appMenuStore } from '@/store/appMenuStore.js';
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Algorithme from '@/Helpers/Algorithme.js';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
    import { RouterLink } from 'vue-router';


    const consumer = new Consumer('menus');

    const menus = ref([]);
    const Loading = ref(true);

    const getMenus = async () => {
        await consumer.index();
        menus.value = appMenuStore().getAll
        Loading.value = false;
    };


    onMounted(() => {
        getMenus();
    });


    


    const index = ref(0);
    const pag_from = ref(0);
    const pag_to = ref(5);

    const tempMeal = reactive({});
        
    



    const  confirmDelete = (id, index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                useAppSpinnerStore().show("meal-crud");
                const msg = await consumer.destroy(id);
                useAppSpinnerStore().hide();

                if(msg.status){
                    Swal.fire("Deleted!", msg.message, "success");
                    menus.value.splice(index, 1);
                }
                else
                    Swal.fire("Error!", msg.message, "error");
            }
        });
    };

    const confirmClear = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                useAppSpinnerStore().show("meal-crud");
                const msg = await consumer.destroy("all");
                useAppSpinnerStore().hide();

                if(msg.status){
                    Swal.fire("Deleted!", msg.message, "success");
                    menus.value = [];
                }
                else
                    Swal.fire("Error!", msg.message, "error");
            }
        });
    };

    const prevPage = () => {
        if(pag_from.value > 0){
            pag_from.value -= 5;
            pag_to.value -= 5;
        }
    }

    const nextPage = () => {
        if(pag_to.value < menus.value.length){
            pag_from.value += 5;
            pag_to.value += 5;
        }
    }

    const keysInvisible = ref([])
    function search(key) {
        keysInvisible.value = [];
        if(key != ""){
            
            for(let i = 0; i < menus.value.length; i++){
                if(!Algorithme.search(menus.value[i].name , key)
                    && !Algorithme.search(menus.value[i].description , key)
                    && !Algorithme.search(menus.value[i].quantity , key)
                ){
                    keysInvisible.value.push(i);
                    if(pag_to.value - pag_from.value < 5){
                        pag_to.value++;
                    }
                }
            }
        }else{
            pag_from.value = 0;
            pag_to.value = 5;
        }
    }
</script>

<template>
    <section>
        <div class="table-responsive">
            <div class="tabel-config">
                <div class="search-container d-flex align-items-center">
                    <p class="tabel-title fs-3  mb-0 ">Menus</p>
                    <input type="text" placeholder="Search" class="form-control ms-4"  @keyup="search($event.target.value)">
                </div>
                <div class="d-flex align-items-center">
                    <div class="global-actions-container">

                    <router-link :to="{ name: 'DashboardAction', params: { model: 'menu',action: 'add' } }">                 
                        <button class="btn btn-success me-2">
                            <i class="fas fa-plus"></i>
                        </button>
                    </router-link>
                        <button class="btn btn-danger " @click="confirmClear">
                            <i class="fas fa-trash"></i>
                        </button>

                        <button class="btn btn-primary ms-3 me-2" @click="prevPage">
                            <i class="fas fa-chevron-left"></i>
                        </button>

                        <button class="btn btn-primary" @click="nextPage">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                
            </div>
            <table id="meal-tabel" class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody class="position-relative" v-if="menus.length > 0">
                    <Spinner v-if="useAppSpinnerStore().getStatus == 'meal-crud'" :trenspBackg="true" />
                    <tr v-bind="meal" v-for="(meal, i) in appMenuStore().getAll.slice(pag_from, pag_to)" :key="meal.id" > 
                        <td v-if="!keysInvisible.includes(i)">
                            <div class="d-flex align-items-center ">
                                <img :src="meal.image" alt="" style="width: 45px; height: 45px" class="meal-image" />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ meal.name }}</p>
                                </div>
                            </div>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <p class="mb-0">{{ meal.description }}</p>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <span class="badge">{{ meal.quantity }}</span>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <div class="action-cotainer">
                                
                                <router-link :to="{ name: 'DashboardAction', params: { model: 'menu', action: 'show' , id: meal.id } }">      
                                    <i class="show fas fa-eye"></i>
                                </router-link>
                                <router-link :to="{ name: 'DashboardAction', params: { model: 'menu', action: 'edite' , id: meal.id } }">      
                                    <i class="edit fas fa-edit"></i>
                                </router-link>

                                <i class="delete fas fa-trash" @click="confirmDelete(meal.id, i)"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    
                    <tr v-if="Loading">
                        <td v-for="i in 5" class="text-center">
                            <i class="fas fa-spinner fa-spin"></i>
                        </td>
                    </tr>

                    <tr v-else>
                        <td v-for="i in 5">
                            <p>no dta </p>
                        </td>
                    </tr>
                </tbody>

            </table>

            <div class="text-end text-primary">
                <p>Page {{ pag_from / 5 + 1 }} of {{ Math.ceil(menus.length / 5) }}</p>
            </div>

            
        </div>
    </section>
</template>


<style scoped>

.action-cotainer {
    display: flex;
    justify-content: space-between;
    width: 100px;
}

.action-cotainer .show {
    color: #4caf50;
}


.action-cotainer .edit {
    color: #2196f3;
}

.action-cotainer .delete {
    color: #f44336;
}

.action-cotainer i {
    border: 2px solid transparent;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
}

.action-cotainer i:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
}

.action-cotainer i:active {
    background-color: #e0e0e0;
    border-color: #aaa;
}

.tabel-config {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.meal-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    border: 2px solid #989898;

}

.global-actions-container button{
    padding: 10px;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
}

.badge {
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    background-color: #6c757d;
}

@media (max-width: 768px) {
.tabel-config {
    flex-direction: column;
    align-items: center;
}

.search-container {
    margin-bottom: 10px;
}
}

/* Larger screens */
@media (min-width: 769px) {
.tabel-config {
    justify-content: space-between;
}
}

</style>