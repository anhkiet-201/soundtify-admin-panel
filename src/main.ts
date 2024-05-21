import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pinia } from './di/injector'
import router from './router/index'
createApp(App)
.use(pinia)
.use(router)
.mount('#app')