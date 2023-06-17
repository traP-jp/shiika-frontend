import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Login = () => import('../pages/Login.vue')
const User = () => import('../pages/User.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user',
    component: User,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router