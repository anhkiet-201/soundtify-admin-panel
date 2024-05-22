import { createApp, markRaw } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import { pinia } from './di/injector'
import router from './router/index'
import { Router } from 'vue-router'

pinia.use(({ store }) => {
    store.router = markRaw(router)
});
declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router;
    }
}
createApp(App)
.use(pinia)
.use(router)
.mount('#app')