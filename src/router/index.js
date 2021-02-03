import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/pay',
    name: 'pay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pay/index.vue')
  },
  {
    path: '/Mobile',
    name: 'Mobile',
    component: () => import('../views/Mobile/index.vue')
  }, {
    path: '/pay_info',
    name: 'pay_info',
    component: () => import('../views/pay_info/index.vue')
  }, {
    path: '/donation',
    name: 'donation',
    component: () => import('../views/donation/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
