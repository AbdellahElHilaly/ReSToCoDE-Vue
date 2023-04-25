<script setup>
    import { useAppAlertStore } from '@/store/appAlerStore.js'
    import { ref , onMounted } from 'vue'
    import {RouterLink } from "vue-router";
    const successCodes = ref([200 , 201])
    const infoCodes = ref([100])
    const dangerCodes = ref([422 ,404, 500])
    const warningCodes = ref([400 , 401 , 402, 403])

    let  alertElement = ref(null)
    const hide = () => {
        if (alertElement.value !== null) {
            alertElement.value.classList.add("animate-hide");
            setTimeout(() => {
                useAppAlertStore().hide();
            }, 500);
        }
    }

    onMounted(() => {
        alertElement.value = document.querySelector(".Alert");
    })

</script>


<template>
    <div class="Alert " @click="hide" >
        <div class="check" v-if="successCodes.includes(useAppAlertStore().getCode)">
            <i class="far fa-check-circle color me-2"></i> 
            <span class="me-2">{{ useAppAlertStore().getMessage }}</span>
            <router-link :to="useAppAlertStore().getLink" v-if="useAppAlertStore().getLink != '' " class="link">{{ useAppAlertStore().getLink }}</router-link>
        </div>

        <div class="info" v-if="infoCodes.includes(useAppAlertStore().getCode)">
            <i class="fa fa-info-circle spin me-2"></i>
            <span class="me-2">{{ useAppAlertStore().getMessage }}</span>
            <router-link :to="useAppAlertStore().getLink" v-if="useAppAlertStore().getLink != '' " class="link">{{ useAppAlertStore().getLink }}</router-link>
        </div>


        <div class="warning" v-if="warningCodes.includes(useAppAlertStore().getCode)">
            <i class="fa fa-exclamation-triangle dance me-2"></i>
            <span class="me-2">{{ useAppAlertStore().getMessage }}</span>
            <router-link :to="useAppAlertStore().getLink" v-if="useAppAlertStore().getLink != '' " class="link">{{ useAppAlertStore().getLink }}</router-link>
        </div>

        <div class="danger" v-if="dangerCodes.includes(useAppAlertStore().getCode)">
            <i class="far fa-times-circle shine me-2"></i>
            <span class="me-2">{{ useAppAlertStore().getMessage }}</span>
            <router-link :to="useAppAlertStore().getLink" v-if="useAppAlertStore().getLink != '' " class="link">{{ useAppAlertStore().getLink }}</router-link>
        </div>
    </div>

</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Mochiy+Pop+P+One&family=Montserrat&family=Oswald:wght@300&family=Varela+Round&family=ZCOOL+KuaiLe&display=swap');

.Alert {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    margin: 0.5%;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    animation: show 0.5s ease-in-out;
}

@keyframes show {
    0% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(50%);
    }
    100% {
        transform: translateY(0);
    }
}


@keyframes hide {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);
    }
}

.animate-hide {
    animation: hide 0.6s ease-in;
}


.check {
    border-radius: 5px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #2ecc71;
    cursor:pointer;
    box-shadow:  9px 9px 18px #bdc3c7,
        -9px -9px 18px #ecf0f1;
    color: #fff;
}
.check:hover{
    background-color: #27ae60;
    transition:0.5s;
}

.color {
    animation: color 2s linear infinite;
}


.info {
    border-radius: 5px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #3498db;
    cursor:pointer;
    box-shadow:  9px 9px 18px #bdc3c7,
        -9px -9px 18px #ecf0f1;
    color: #fff;
}

.spin {
    animation: spin 2s linear infinite;
    /* add animation like dancer watch classic
     */
}

.dance {
    animation: dance 2s linear infinite;
}

@keyframes dance {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-45deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.info:hover
{
    background-color: #2980b9;
    transition:0.5s;
}

.warning {
    border-radius: 5px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f1c40f;
    cursor:pointer;
    box-shadow:  9px 9px 18px #bdc3c7,
        -9px -9px 18px #ecf0f1;
    color: black;
}

.warning:hover{
    background-color: #f39c12;
    transition:0.5s;
}

.rotate {
    animation: rotate 2s linear infinite;
}
.danger {
    border-radius: 5px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #e74c3c;
    cursor:pointer;
    box-shadow:  9px 9px 18px #bdc3c7,
        -9px -9px 18px #ecf0f1;
    color: black;
}

.danger:hover
{
    background-color: #c0392b;
    transition:0.5s;
}


.shine {
    animation: shine 2s linear infinite;
}

.link {
    color: #0073ff;
    text-decoration: underline;
    font-weight: bold;
    padding: 2px;
    border : 1px solid black;
    border-radius: 5px;
}



.link:hover {
    background-color: #0073ff;
    color: #fff;
    transition: 0.5s;
}



@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

@keyframes color {
    0% {
        color: #fff;
    }
    50% {
        color: #000;
    }
    100% {
        color: #fff;
    }
}

@keyframes shine {
    0% {
        color: #fff;
    }
    50% {
        color: #000;
    }
    100% {
        color: #fff;
    }
}




</style>