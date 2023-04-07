<script setup>

    const { meals } = defineProps();

</script>


<template>



    <div class="table-responsive">
        <table id="meal-tabel" class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Actions</th>

                    <!-- <th v-for="(key, i) in Object.keys(meals[0])" :key="i">{{ key }}</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(meal, i) in meals" :key="meal.id">
                    <td>
                        <div class="d-flex align-items-center ">
                            <img :src="meal.image" alt="" style="width: 45px; height: 45px" class="meal-image rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">{{ meal.name }}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="mb-0">{{ meal.description }}</p>
                    </td>
                    <td>
                        <span class="badge badge-primary">{{ meal.category }}</span>
                    </td>
                    <td>
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
</style>