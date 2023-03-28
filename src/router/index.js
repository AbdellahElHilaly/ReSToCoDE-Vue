import { createRouter, createWebHistory } from 'vue-router'
import LandingPages from '../views/LandingPages/LandingHome.vue'
import LogIn from '../views/Auth/LogIn.vue'
import SignUp from '../views/Auth/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPages
    },
    {
      path: '/login',
      name: 'Login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

export default router
