import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../View/dashboard.vue';
import artistsManagerment from '../View/artists_managerment.vue';
import userManagerment from '../View/users_managerment.vue';
import trackManagerment from '../View/tracked_managerment.vue';
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
     {
        path: '/user',
        name: 'usermanagerment',
        component: userManagerment
      },
      {
        path: '/artist',
        name: 'artistmanagerment',
        component: artistsManagerment
      },
      {
        path: '/track',
        name: 'trackmanagerment',
        component: trackManagerment
      },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

