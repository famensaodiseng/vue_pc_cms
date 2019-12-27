/*
 * @Descripttion: pc_cms
 * @version: 1.0
 * @Author: yang_ft
 * @Date: 2019-12-23 14:19:59
 * @github: famensaodiseng
 * @LastEditTime : 2019-12-27 18:24:43
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import '../assets/css/global.css'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/Login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
