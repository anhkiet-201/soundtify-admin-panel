<template>
  <div class="container-fluid d-flex p-0 m-0">
    <div class="col-lg-2" v-if="auth.isLogined">
      <side-bar style="height: 100vh;"></side-bar>
    </div>
    <div :class="`col-${auth.isLogined ? '10' : '12' }`">
      <router-view/>
    </div>
   
  </div>
</template>

<script setup lang="ts">

import sideBar from './components/sidebar/sidebar-md.vue';
import { useAuthStore } from './global/auth/auth';
// import artistManagerment from "./View/artists_managerment.vue";
const auth = useAuthStore();
auth.initialize();
</script>

<style scoped></style>
