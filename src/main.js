import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import InstantSearch from 'vue-instantsearch/vue3/es';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(InstantSearch)

app.mount('#app')
