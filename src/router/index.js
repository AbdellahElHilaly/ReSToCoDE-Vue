import { createRouter, createWebHistory } from 'vue-router'
import LandingPages from '../views/LandingPages/LandingHome.vue'
import LogIn from '@/views/Auth/LogIn.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import ActivateAccount from '@/views/Auth/ActivationForm.vue'
import UserProfile from '@/views/Auth/UserProfile.vue'
import RessetPassword from '@/views/Auth/RessetPassword.vue'
import DeviceVerification from '@/views/Auth/DeviceVerification.vue'

import Dashboard from '@/views/Dashboard/DashboardVue.vue'



import PageNotFound from '@/views/Errors/404.vue'
import InternalServerError from '@/views/Errors/500.vue'

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
      path: '/activate',
      name: 'ActivationForm',
      component: ActivateAccount,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile,

      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }

    },
    {
      path: '/reset',
      name: 'RessetPassword',
      component: RessetPassword,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/verify',
      name: 'DeviceVerification',
      component: DeviceVerification,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/500',
      name: 'InternalServerError',
      component: InternalServerError,


    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: PageNotFound
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },


  ]
})

export default router




