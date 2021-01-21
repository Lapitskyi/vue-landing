import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Orders from '../components/Orders/Orders'
import Portfolio from '../components/Portfolio/Portfolio'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'



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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
