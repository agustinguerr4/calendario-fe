import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardRoutes from './Dashboard'
import AuthRoutes from './Auth'
import PublicRoutes from './Public'
import store from '../store/index'



Vue.use(VueRouter)

const routes = [
  DashboardRoutes,
  AuthRoutes,
  PublicRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('Auth/fetchAccessToken');
  DashboardRoutes.children.map(e => {
    if (to.fullPath === e.path) {
      if (!store.state.Auth.token) {
        next('/login');
      }
    }
  })
 
  if (to.fullPath === '/login') {
    if (store.state.Auth.token) {
      next('/inicio');
    }
  }
  next();
});


export default router
