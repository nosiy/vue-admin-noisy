import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const _import = file => () => import(`@/views/${file}.vue`)
const Layout = () => import('@/layout/index.vue')

export const constantRoutes = [
  {
    path: '/Login',
    name: 'Login',
    hidden: true,
    component: _import('common/Login')
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    component: _import('errorPage/401')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: _import('errorPage/404')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    hidden: true,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: constantRoutes
})

export const asyncRoutes = [
  {
    path: '/testName1',
    component: Layout,
    redirect: '/test11',
    meta: { title: '测试1项目栏' },
    children: [
      {
        path: '/test11',
        component: _import('test1/test11'),
        meta: { title: '测试1' }
      },
      {
        path: '/test12',
        component: _import('test1/test12'),
        meta: { title: '测试2' }
      }
    ]
  },
  {
    path: '/testName3',
    component: Layout,
    meta: { title: '测试3项目栏' },
    redirect: '/test31',
    children: [
      {
        path: '/test31',
        component: _import('test3/test31'),
        meta: { title: '测试3' }
      }
    ]
  },
  {
    path: '/testName2',
    component: Layout,
    redirect: '/test21',
    meta: { title: '测试2项目栏' },
    children: [
      {
        path: '/test21',
        component: _import('test2/test21'),
        meta: { title: '测试3' }
      },
      {
        path: '/test22',
        component: _import('test2/test22'),
        meta: { title: '测试4' }
      }
    ]
  }
]

export default router
