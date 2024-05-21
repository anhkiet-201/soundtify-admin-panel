import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../View/dashboard.vue';
import artistsManagerment from '../View/artists_managerment.vue';
import userManagerment from '../View/users_managerment.vue';
import trackManagerment from '../View/tracked_managerment.vue';


const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: dashboard
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

