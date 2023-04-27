<script setup>
    import { ref, onMounted ,reactive} from 'vue';
    import { appMealStore } from '@/store/appMealStore.js';
    import { appCategoryStore } from '@/store/appCategoryStore.js'
    import Consumer from '@/Api/Services/Consumer.js';
    import Swal from 'sweetalert2'
    import Algorithme from '@/Helpers/Algorithme.js';
    import Category from '@/components/Show/Category.vue';
    import Spinner from "@/components/Layouts/SpinnerView.vue";
    import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'


    
    const consumer = new Consumer('meals');
    const consumer_2 = new Consumer('categories');

    const meals = ref([]);
    const categories = ref([]);

    const Loading = ref(true);

    const getMeals = async () => {
        await consumer.index();
        meals.value = appMealStore().getAll
        Loading.value = false;
    };

    const getCategories = async () => {
        await consumer_2.index('categories');
        categories.value = appCategoryStore().getAll
    };

    onMounted(() => {
        getCategories();
        getMeals();


    });


    


    const index = ref(0);
    const pag_from = ref(0);
    const pag_to = ref(5);

    const tempMeal = reactive({});
        
    

    const formeData = new FormData();




    const saveEditedMeal = async () => {

        formeData.append("id", tempMeal.id);
        formeData.append("name", tempMeal.name);
        formeData.append("description", tempMeal.description);
        formeData.append("category_id", tempMeal.category_id);
        formeData.append("quantity", tempMeal.quantity);

        useAppSpinnerStore().show("meal-crud");
        const msg = await consumer.update(tempMeal.id , formeData);
        useAppSpinnerStore().hide();

        if(msg.status){
            Swal.fire("Updated!", msg.message, "success");
            meals.value[index.value] = msg.data;
            for (const key in tempMeal) {
                tempMeal[key] = null;
            }
        }
        else
            Swal.fire("Error!", msg.message, "error");
    };

    const setEditedMeal = (meal) => {
        index.value = meals.value.indexOf(meal);
        tempMeal.id = meal.id;
        tempMeal.name = meal.name;
        tempMeal.image = meal.image;
        tempMeal.description = meal.description;
        tempMeal.category_id = meal.category_id;
        tempMeal.quantity = meal.quantity;
    };

    const saveNewMeal = async () => {
        formeData.append("name", tempMeal.name);
        formeData.append("description", tempMeal.description);
        formeData.append("category_id", tempMeal.category_id);
        formeData.append("quantity", tempMeal.quantity);
        

        useAppSpinnerStore().show("meal-crud");
        const msg = await consumer.store(formeData);
        useAppSpinnerStore().hide();

        if(msg.status){
            Swal.fire("Created!", msg.message, "success");
            meals.value.push(msg.data);
            for (const key in tempMeal) {
                tempMeal[key] = null;
            }
        }
        else
            Swal.fire("Error!", msg.message, "error");
    };


    const  confirmDelete = (id , index) => {
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
                    meals.value.splice(index, 1);
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
                    meals.value = [];
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
        if(pag_to.value < meals.value.length){
            pag_from.value += 5;
            pag_to.value += 5;
        }
    }

    const keysInvisible = ref([])
    function search(key) {
        keysInvisible.value = [];
        if(key != ""){
            
            for(let i = 0; i < meals.value.length; i++){
                if(
                    !Algorithme.search(meals.value[i].name , key)
                    && !Algorithme.search(meals.value[i].description , key)
                    && !Algorithme.search(meals.value[i].category , key)
                    &&!Algorithme.search(meals.value[i].quantity , key)
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

    const onFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            tempMeal.image = reader.result;
            formeData.append("image", file);
        };
    };

</script>






<template>

    <section >
        <div class="table-responsive" v-if="meals">
            <div class="tabel-config">
                
                <div class="search-container d-flex align-items-center">
                    <p class="tabel-title fs-3  mb-0 ">Meals</p>
                    <input type="text" placeholder="Search" class="form-control ms-4"  @keyup="search($event.target.value)">
                </div>
                <div class="d-flex align-items-center">
                    <div class="global-actions-container">
                        <button class="btn btn-success me-2" data-mdb-toggle="modal" data-mdb-target="#add-modal">
                            <i class="fas fa-plus"></i>
                        </button>

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
                        <th>Category</th>
                        <th>quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody class="position-relative" v-if="meals.length > 0">
                    <Spinner v-if="useAppSpinnerStore().getStatus == 'meal-crud'" :trenspBackg="true" />
                    <tr v-bind="meal" v-for="(meal, i) in meals.slice(pag_from, pag_to)" :key="meal.id" > 
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
                            <Category :category="meal.category" />
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <span class="badge">{{ meal.quantity }}</span>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <div class="action-cotainer">
                                <input type="hidden" :value="meal.id" />
                                <i class="show fas fa-eye" data-mdb-toggle="modal" data-mdb-target="#show-model" @click="index = i"></i>
                                <i class="edit fas fa-edit" data-mdb-toggle="modal" data-mdb-target="#edit-modal" @click="setEditedMeal(meal)"></i>
                                <i class="delete fas fa-trash" @click="confirmDelete(meal.id , i)"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>

                <tbody class="position-relative" v-else>
                    <Spinner v-if="useAppSpinnerStore().getStatus == 'meal-crud'" :trenspBackg="true" />
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
                <p>Page {{ pag_from / 5 + 1 }} of {{ Math.ceil(meals.length / 5) }}</p>
            </div>

            
        </div>
    </section>











<!-- Show Meal Modal -->
    <div class="modal fade " id="show-model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="meals">
        <div class="modal-dialog ">
            <div class="modal-content  ">
                <div class="modal-body p-0 " v-if="meals.length > 0">

                    <img  :src="meals[index].image" alt=""  />

                    <div class="meal-info p-2">
                        <h3 class="meal-name">{{ meals[index].name }}</h3>
                        <p class="meal-description">{{ meals[index].description }}</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <Category :category="meals[index].category" />
                            <p class="meal-quantity ">{{ meals[index].quantity }}</p>
                        </div>


                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>







    <!-- Edit Meal Modal -->
    <div class="modal fade" id="edit-modal" tabindex="-1" aria-labelledby="edit-modal-title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit-modal-title">Edit Meal</h5>
                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="form-group">

                        <label for="edit-meal-image">Image:</label>
                        <div class="text-center mb-3">
                            <img :src="tempMeal.image" alt="" style="width: 100px; height: 100px" class="rounded-circle" />
                        </div>
                        <input type="file" class="form-control" id="edit-meal-image" accept="image/*" @change="onFileChange" />
                    </div>

                    <div class="form-group">
                        <label for="edit-meal-name">Name:</label>
                        <input type="text" class="form-control" id="edit-meal-name" v-model="tempMeal.name" />
                    </div>
                    <div class="form-group">
                        <label for="edit-meal-description">Description:</label>
                        <textarea class="form-control" id="edit-meal-description" rows="3" v-model="tempMeal.description"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="edit-meal-category">Category:</label>
                        <select class="form-select"  aria-label="Default select example" id="edit-meal-category" v-model="tempMeal.category_id">
                            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                    


                    <div class="form-group">
                        <label for="edit-meal-quantity">Quantity:</label>
                        <input type="number" class="form-control" id="edit-meal-quantity" v-model="tempMeal.quantity" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-mdb-dismiss="modal" aria-label="Close" @click="saveEditedMeal">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- add Meal Modal -->
    <div class="modal fade" id="add-modal" tabindex="-1" aria-labelledby="add-modal-title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="add-modal-title">add Meal</h5>
                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="form-group">

                        <label for="add-meal-image">Image:</label>
                        <div class="text-center mb-3">
                            <img :src="tempMeal.image" alt="" style="width: 100px; height: 100px" class="rounded-circle" />
                        </div>
                        <input type="file" class="form-control" id="add-meal-image" accept="image/*" @change="onFileChange" />
                    </div>

                    <div class="form-group">
                        <label for="add-meal-name">Name:</label>
                        <input type="text" class="form-control" id="add-meal-name" v-model="tempMeal.name" />
                    </div>
                    <div class="form-group">
                        <label for="add-meal-description">Description:</label>
                        <textarea class="form-control" id="add-meal-description" rows="3" v-model="tempMeal.description"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="add-meal-category">Category:</label>
                        <select class="form-select"  aria-label="Default select example" id="add-meal-category" v-model="tempMeal.category_id">
                            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                    


                    <div class="form-group">
                        <label for="add-meal-quantity">Quantity:</label>
                        <input type="number" class="form-control" id="add-meal-quantity" v-model="tempMeal.quantity" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-mdb-dismiss="modal" aria-label="Close" @click="saveNewMeal">Save changes</button>
                </div>
            </div>
        </div>
    </div>

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

.modal-body img{
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

.tabel-config {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.tabel-config .page {
    display: flex;
    align-items: center;
}

.tabel-config .page .page-number {
    margin: 0 10px;
}

.tabel-config .page .page-number input {
    width: 50px;
    text-align: center;
}

.tabel-config .page .page-number input:focus {
    outline: none;
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