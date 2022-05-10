import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'AccountPage',
    component: () => import('@/components/AccountPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/components/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('@/components/RegisterPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
