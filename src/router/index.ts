import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../View/dashboard.vue';
import trackManagerment from '../View/tracked_managerment.vue';
import reportManagerment from '../View/flag_managerment.vue';
import Login from '../View/login.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
      {
        path: '/track',
        name: 'trackmanagerment',
        component: trackManagerment
      },
      {
        path: '/report',
        name: 'report',
        component: reportManagerment
      },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

