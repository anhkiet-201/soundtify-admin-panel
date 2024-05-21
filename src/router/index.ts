import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../View/dashboard.vue'
import artists_managerment from '../View/artists_managerment.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: artists_managerment
      },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })



export default router

