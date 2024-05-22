<template>
  <div class="container-fluid d-flex p-0 m-0">
    <div class="col-lg-2">
      <side-bar style="height: 100vh;"></side-bar>
    </div>
    <!-- <div class="col-lg-10" style="height: 100vh;">
      <div class="d-flex">
        <div class="left col-5 border-end">
          <form-md></form-md>
        </div>
        <div class="right col-7">
          <table-normal></table-normal>
        </div>
      </div>
    </div> -->
    <!-- <artistManagerment></artistManagerment> -->
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import formMd from './components/form/form-md.vue';
import tableNormal from './components/table/table-normal.vue';
import sideBar from './components/sidebar/sidebar-md.vue';
import { useAuthStore } from './global/auth/auth';
// import artistManagerment from "./View/artists_managerment.vue";
const auth = useAuthStore();
auth.initialize();
</script>

<style scoped></style>
