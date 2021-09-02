import DashboardView from '@/views/Dashboard/index.vue'
import Inicio from '@/views/Home.vue'
import Calendario from '../components/Calendario/Index.vue'
import Ambientes from '../components/Ambientes/Ambientes.vue'
import Plantas from '../components/Plantas/Plantas.vue'
import Configuracion from '../components/Configuracion/Configuracion.vue'
import Calculadora from '../components/Calculadora/Calculadora.vue'
import Reprocann from '../components/Reprocann/Reprocann.vue'

export default {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    redirect: '/inicio',
    children: [
        {
            path: '/inicio',
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
        },
        {
            path: '/reprocann',
            name: 'Reprocann',
            component: Reprocann
        }]
}