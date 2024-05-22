<template>
  <div class="flex-shrink-0 p-3 bg-dark">   
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold text-white">Soundtify</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <router-link :to="'/dashboard'">
        <button class="btn btn-toggle align-items-center rounded text-white collapsed" >
          Dashboard
        </button>
      </router-link>
      </li>
      <li class="mb-1">
        <router-link :to="'/track'">
        <button class="btn btn-toggle align-items-center rounded text-white collapsed" >
          track managerment
        </button>
      </router-link>
      </li>
      <li class="mb-1">
        <router-link :to="'/report'">
        <button class="btn btn-toggle align-items-center rounded text-white collapsed" >
          report managerment
        </button>
      </router-link>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded text-white collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded text-white">New...</a></li>
            <li><a href="#" class="link-dark rounded text-white">Profile</a></li>
            <li><a href="#" class="link-dark rounded text-white">Settings</a></li>
            <li><a href="#" class="link-dark rounded text-white">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { songStatistical } from '../../firebase/fire_store/fire_store';

songStatistical();
</script>

<style>

</style>