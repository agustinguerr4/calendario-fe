import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Calendario from '../components/Calendario/Index.vue'
import Ambientes from '../components/Ambientes/ListaAmbientes.vue'
import Plantas from '../components/Plantas/ListaPlantas.vue'
import Configuracion from '../components/Configuracion/Configuracion.vue'
import Calculadora from '../components/Calculadora/Calculadora.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/ambientes',
    name: 'Ambientes',
    component: Ambientes
  },
  {
    path: '/plantas',
    name: 'Plantas',
    component: Plantas
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: Calendario
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: Configuracion
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: Calculadora
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
