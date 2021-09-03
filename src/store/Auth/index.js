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
        commit('loginUser', user)
        commit('setToken', token)
        localStorage.setItem('apollo-token', token)
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
        console.log(loginUser)

        const token = loginUser.token
        commit('loginUser', user)
        commit('setToken', token)
        // Set token in ls
        localStorage.setItem('apollo-token', token)
        //redirect to /
        router.push('/inicio')
    },

    async cerrarSesion({commit}){
        commit('cerrarSesion')
    } ,
     fetchAccessToken({ commit }) {
        commit('setToken', localStorage.getItem('apollo-token'));
      },
}
const mutations = {
    loginUser(state, payload) {
        state.user = payload
        state.authStatus = true
        localStorage.setItem('authStatus', state.authStatus)
    },
    setToken(state, payload) {
        state.token = payload
    },

    cerrarSesion(state){
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