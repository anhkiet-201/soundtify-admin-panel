import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../View/dashboard.vue';
import on_boading from '../View/on_boading.vue';
import artists_managerment from '../View/artists_managerment.vue';
import Login from '../View/login.vue';

const routes = [
  {
    path: '/',
    name: 'onBoading',
    component: on_boading
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

