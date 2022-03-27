import { createApp } from 'vue'
import './tailwind.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay, } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
