import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/common/Login.vue')
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/errorPage/401.vue')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/errorPage/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
