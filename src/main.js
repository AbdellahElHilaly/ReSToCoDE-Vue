import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')


/*

what is the best directory to create the states froe pinia?

the best way to create the states for pinia is to create a folder called states and then create a file for each state

the folder states should be in the src folder or not?

the folder states should be in the src folder



*/
