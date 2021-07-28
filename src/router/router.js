import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: ()=>import('@/views/Work')
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import('@/views/About')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: ()=>import('@/views/Teams')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: ()=>import('@/views/Blog')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ()=>import('@/views/Contact')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('@/views/Auth/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: ()=>import('@/views/Auth/Registration')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: ()=>import('@/views/Auth/Reset')
  },


  // {
  //   path: '/categories',
  //   name: 'Categories',
  //   meta: { layout: 'main' },
  //   component: () => import('@/views/Categories.vue')
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
