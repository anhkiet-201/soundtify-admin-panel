<template>
    <div class="container-fluid text-secondary bg-module rounded" style="height: 100vh;">
        <div class="d-flex justify-content-center align-items-center">
            <div class="col-lg-5 bg-dark rounded text-center row justify-content-center mt-5">
                <span class="fs-2 fw-bold text-white my-5"> Log in to Soundtify </span>
                <div class="border-top border-secondary col-9 my-5 "></div>
                <!-- Login with email and password -->
                <form @submit.prevent="onLogin" id="form-1">
                    <div class="my-2 d-flex justify-content-center">
                        <div class="custom-form">
                            <input type="text" name="text" id="email" required v-model="email"
                               />
                            <label for="text" class="label-name">
                                <span class="content-name"> Email </span>
                            </label>
                        </div>
                    </div>
                    <!-- <span class="fs-8 p-0 " v-if="!isCheckValidation">{{ this.error.email }}</span> -->


                    <div class="my-3 d-flex justify-content-center">
                        <div class="custom-form">
                            <input type="text" name="text" id="password" required v-model="password"
                               />
                            <label for="text" class="label-name">
                                <span class="content-name"> Mật khẩu </span>
                            </label>
                        </div>
                    </div>

                    <!-- <span class="fs-8 p-0 " v-if="!isCheckValidation">{{ this.error.password }}</span> -->
                    <div class="px-3 py-4">
                        <button class="btn btn-success py-2 col-12" type="submit">
              Log in
            </button>
                       
                    </div>
                </form>

            
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../global/auth/auth';
const email = ref('');
const password = ref('');
const auth = useAuthStore();

const onLogin = async () => {
    console.log(email.value, password.value);
    
    auth.login(email.value, password.value);
}
</script>
