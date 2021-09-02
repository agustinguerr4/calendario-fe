import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardRoutes from './Dashboard'
import AuthRoutes from './Auth'
import PublicRoutes from './Public'



Vue.use(VueRouter)

const routes = [
  DashboardRoutes,
  AuthRoutes,
 PublicRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
