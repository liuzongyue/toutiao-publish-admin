import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
