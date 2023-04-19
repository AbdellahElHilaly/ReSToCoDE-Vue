<script setup>


</script>



<template>

    <section>

        <div class="forme-container">
            <div class="forme-header">
                <p class="title">Add Menu</p>
                <button class="btn btn-info">Add</button>
            </div>
            <div class="forme-body">
                <div class="left-container">

                    <div class="input-container">
                        <label for="">Name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="input-container">
                        <label for="">Description</label>
                        <textarea type="text" class="form-control"></textarea> 
                    </div>
                    

                </div>
                <div class="reight-container">
                    <div class="input-container">
                        <label for="">Quantity</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="input-container">
                        <label for="">Dtae</label>
                        <input type="date" class="form-control">
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











</style>

