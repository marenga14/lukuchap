import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import setting from '../views/setting.vue'
import profile from "../views/profile.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setting',
    name: 'setting',
    component:setting
  },
  {
    path: '/profile',
    name: 'profile',
    component:profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
