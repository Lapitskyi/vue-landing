import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Orders from '../views/Orders/Orders'
import Portfolio from '../views/Portfolio/Portfolio'
import Login from '../views/Auth/Login'
import Registration from '../views/Auth/Registration'
import Reset from '../views/Auth/Reset'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Orders
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
