import { createRouter, createWebHistory } from 'vue-router'
import LandingPages from '../views/LandingPages/LandingHome.vue'
import LogIn from '@/views/Auth/LogIn.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import ActivateAccount from '@/views/Auth/ActivationForm.vue'
import UserProfile from '@/views/Auth/UserProfile.vue'
import RessetPassword from '@/views/Auth/RessetPassword.vue'



import Error from '@/views/Errors/ErrorVue.vue'

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
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/activate',
      name: 'ActivationForm',
      component: ActivateAccount
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/reset',
      name: 'RessetPassword',
      component: RessetPassword
    }
  ]
})

export default router
