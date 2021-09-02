import AuthView from '@/views/Auth/index.vue'

export default {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
    redirect: '/login',
    children: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Auth/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/Auth/Register.vue')
        },
    ]
}