import {AUTH_TOKEN} from '@/Api/Config/config.js';
import { createRouter, createWebHistory } from 'vue-router'
import LandingPages from '../views/LandingPages/LandingHome.vue'
import LogIn from '@/views/Auth/LogIn.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import ActivateAccount from '@/views/Auth/ActivationForm.vue'
import UserProfile from '@/views/Auth/UserProfile.vue'
import RessetPassword from '@/views/Auth/RessetPassword.vue'
import DeviceVerification from '@/views/Auth/DeviceVerification.vue'
import Dashboard from '@/views/Dashboard/DashboardVue.vue'
import DashboardAction from '@/views/Dashboard/DashboardAction.vue'

import AuthConsumer from "@/Api/Services/AuthConsumer.js";


import PageNotFound from '@/views/Errors/404.vue'
import InternalServerError from '@/views/Errors/500.vue'
import { useAppUserStore } from '../Store/appUserStore';

const authConsumer = new AuthConsumer();

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
      component: LogIn,

      // if the user is already logged in, redirect to the dashboard
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
          router.push('/');
        } else {
          next();
        }
      }
      

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
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile,

      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
          next();
        } else {
          router.push('/login');
        }
      }

    },
    {
      path: '/reset',
      name: 'RessetPassword',
      component: RessetPassword,
    },
    {
      path: '/verify',
      name: 'DeviceVerification',
      component: DeviceVerification,
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
      beforeEnter: async (to, from, next) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
          const role = await authConsumer.getRole()
          if (role === 'admin' || role === 'shef') {
            next();
          } else {
            router.push('/');
          }
        } else {
          router.push('/login');
        }
      }
    },

    {
      path: '/dashboard/:model/:id?/:action',
      name: 'DashboardAction',
      component: DashboardAction, 
      beforeEnter: async (to, from, next) => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
          const role = await authConsumer.getRole()
          if (role === 'admin') {
            next();
          } else {
            router.push('/');
          }
        } else {
          router.push('/login');
        }
      }
    },
  ]
})

export default router




