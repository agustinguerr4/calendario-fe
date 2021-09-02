import { CREATE_USER, LOGIN_USER } from '../../graphql/index';
import { apolloClient } from '../../vue-apollo'
import router from '../../router'

const state = {
    authStatus: false,
    token: localStorage.getItem('apollo-token') || null,
    user: {}
}

const getters = {
    user: state => state.user,
    isAuth: state => !!state.token,
    authStatus: state => state.authStatus
}
const actions = {
    //eslint-disable-next-line
    async createUser({ commit }, userData) {
        let { data: { createUser } } = await apolloClient.mutate({
            mutation: CREATE_USER,
            variables: userData
        })

        const user = {
            username: createUser.username,
            email: createUser.email,
            id: createUser._id
        }

        const token = createUser.token
        commit('LOGIN_USER', user)
        commit('SET_TOKEN', token)
        // Set token in ls
        localStorage.setItem('apollo-token', token)

        //redirect to /
        router.push('/inicio')

    },

    async loginUser({commit}, userData){
        let { data: { loginUser } } = await apolloClient.mutate({
            mutation: LOGIN_USER,
            variables: userData
        })

        const user = {
            username: loginUser.username,
            email: loginUser.email,
            id: loginUser._id
        }

        const token = loginUser.token
        commit('LOGIN_USER', user)
        commit('SET_TOKEN', token)
        // Set token in ls
        localStorage.setItem('apollo-token', token)
        //redirect to /
        router.push('/inicio')
    },

    async cerrarSesion({commit}){
        commit('CERRAR_SESION')
    } 
}
const mutations = {
    LOGIN_USER(state, payload) {
        state.user = payload
        state.authStatus = true
        localStorage.setItem('authStatus', state.authStatus)
    },
    SET_TOKEN(state, payload) {
        state.token = payload
    },

    CERRAR_SESION(state){
        state.authStatus = false
        state.token = null;
        state.user = {}
    }

}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}