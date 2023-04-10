<script setup>
    import { ref , reactive  } from "vue";
    import Swal from 'sweetalert2'
    import Algorithme from '@/Helpers/Algorithme.js';

    


    const meals = ref([]);
    const index = ref(0);
    const basPathImage = "http://localhost:5173/src/assets/images/meals/";

    const pag_from = ref(0);
    const pag_to = ref(5);
    const keySearch = ref("");
    


    const editedMeal = reactive({
        id: 0,
        name: "",
        image : "",
        description: "",
        category: ""
    });




    meals.value = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        image : basPathImage + "1.png",
        description: "Spicy Chicken Curry With Basmati Rice and Naan Bread",
        category: "principal"
    },
    {
        id: 2,
        name: "Chicken Fajitas",
        image : basPathImage + "1.png",
        description: "Marinated chicken breast strips with sautéed peppers and onions",
        category: "principal"
    },
    {
        id: 3,
        name: "Beef and Broccoli Stir-Fry",
        image : basPathImage + "1.png",
        description: "Thinly sliced beef with broccoli florets and soy sauce",
        category: "principal"
    },
    {
        id: 4,
        name: "Baked Salmon",
        image : basPathImage + "1.png",
        description: "Fresh salmon fillet baked with lemon, herbs and olive oil",
        category: "principal"
    },
    {
        id: 5,
        name: "Tuna Salad",
        image : basPathImage + "1.png",
        description: "Mixed greens topped with tuna, cherry tomatoes and olives",
        category: "entree"
    },
    {
        id: 6,
        name: "Pesto Pasta",
        image : basPathImage + "1.png",
        description: "Pasta with homemade pesto sauce, cherry tomatoes and parmesan cheese",
        category: "entree"
    },
    {
        id: 7,
        name: "Greek Salad",
        image : basPathImage + "1.png",
        description: "Crisp romaine lettuce with feta cheese, olives, and a lemon vinaigrette",
        category: "entree"
    },
    {
        id: 8,
        name: "Vegetable Soup",
        image : basPathImage + "1.png",
        description: "Hearty vegetable soup with carrots, celery, and potatoes",
        category: "soup"
    },
    {
        id: 9,
        name: "Tomato Soup",
        image : basPathImage + "1.png",
        description: "Classic tomato soup with grilled cheese croutons",
        category: "soup"
    },
    {
        id: 10,
        name: "Caesar Salad",
        image : basPathImage + "1.png",
        description: "Romaine lettuce with homemade croutons, parmesan cheese, and Caesar dressing",
        category: "salad"
    },
    {
        id: 11,
        name: "hhhhhhhhhhhh Salad",
        image : basPathImage + "1.png",
        description: "Romaine lettuce with homemade croutons, parmesan cheese, and Caesar dressing",
        category: "salad"
    }
    ]



    const saveEditedMeal = () => {
        meals.value[index.value].name = editedMeal.name;
        Swal.fire({
            title: 'Success!',
            text: 'Meal updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

    }

    const setEditedMeal = (meal) => {
        index.value = meals.value.indexOf(meal);
        editedMeal.id = meal.id;
        editedMeal.name = meal.name;
        editedMeal.image = meal.image;
        editedMeal.description = meal.description;
        editedMeal.category = meal.category;
    };



    const deleteMeal = (id) => {
        const index = meals.value.findIndex((meal) => meal.id === id);
        meals.value.splice(index, 1);
    };
    const confirmDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
        }).then((result) => {
            if (result.isConfirmed) {
            deleteMeal(id);
            Swal.fire("Deleted!", "The meal has been deleted.", "success");
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

        const options = {
            keys: ['name', 'description', 'category']
        }

        if(key != ""){
            
            for(let i = 0; i < meals.value.length; i++){

                if(!Algorithme.search(meals.value[i].name , key)
                    && !Algorithme.search(meals.value[i].description , key)
                    && !Algorithme.search(meals.value[i].category , key)
                ){
                    keysInvisible.value.push(i);
                    pag_to.value++;
                }
            }

        }else{
            meals.value = meals.value;
            pag_from.value = 0;
            pag_to.value = 5;
                    
        }


        







    }


</script>





<template>

    <section>
        <div class="table-responsive">
            <div class="tabel-config">
                <div class="search-container">
                    <input type="text" placeholder="Search" class="form-control"  @keyup="search($event.target.value)">
                </div>
                <div class="pagination-container">
                    <i class="prev fas fa-chevron-left" @click="prevPage"></i>
                    <i class="next fas fa-chevron-right" @click="nextPage"></i>
                </div>
            </div>
            <table id="meal-tabel" class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody v-if="meals.length > 0">
                    <tr v-bind="meal" v-for="(meal, i) in meals.slice(pag_from, pag_to)" :key="meal.id">
                        <td v-if="!keysInvisible.includes(i)">
                            <div class="d-flex align-items-center ">
                                <img :src="meal.image" alt="" style="width: 45px; height: 45px" class="meal-image rounded-circle" />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ meal.name }}</p>
                                </div>
                            </div>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <p class="mb-0">{{ meal.description }}</p>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <span class="badge badge-primary">{{ meal.category }}</span>
                        </td>
                        <td v-if="!keysInvisible.includes(i)">
                            <div class="action-cotainer">
                                <input type="hidden" :value="meal.id" />
                                <i class="show fas fa-eye" data-mdb-toggle="modal" data-mdb-target="#show-model" @click="index = i"></i>
                                <i class="edit fas fa-edit" data-mdb-toggle="modal" data-mdb-target="#edit-modal" @click="setEditedMeal(meal)"></i>
                                <i class="delete fas fa-trash" @click="confirmDelete(meal.id)"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </section>




<!-- Show Meal Modal -->
    <div class="modal fade " id="show-model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content  ">
                <div class="modal-body p-0 " v-if="meals.length > 0">

                    <img  :src="meals[index].image" alt=""  />

                    <div class="meal-info p-2">
                        <h3 class="meal-name">{{ meals[index].name }}</h3>
                        <p class="meal-description">{{ meals[index].description }}</p>
                        <span class="badge badge-primary">{{ meals[index].category }}</span>

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
                        <label for="edit-meal-name">Name:</label>
                        <input type="text" class="form-control" id="edit-meal-name" v-model="editedMeal.name" />
                    </div>
                    <div class="form-group">
                        <label for="edit-meal-description">Description:</label>
                        <textarea class="form-control" id="edit-meal-description" rows="3" v-model="editedMeal.description"></textarea>
                    </div>
                    <div class="form-group">
                    <label for="edit-meal-category">Category:</label>
                    <select class="form-control" id="edit-meal-category" v-model="editedMeal.category">
                        <option value="principal">Principal</option>
                        <option value="entree">Entree</option>
                        <option value="soup">Soup</option>
                        <option value="salad">Salad</option>
                    </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-mdb-dismiss="modal" aria-label="Close" @click="saveEditedMeal">Save changes</button>
                </div>
            </div>
        </div>
    </div>





    <!-- Delete Meal Modal -->

    

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

/* style pagination items now */

.pagination-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination-container i{
    background-color: #87c5ef;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px;
}

.pagination-container i:hover{
    background-color: #4dacec;
    cursor: pointer;
}

.pagination-container i:active{
    background-color: #1e90ff;
}




</style>