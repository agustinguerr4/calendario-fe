import { CREATE_USER } from '../../graphql/index';
import { apolloClient } from '../../vue-apollo'

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
        console.log("USER DATA: ",userData)
        let resp = await apolloClient.mutate({
            mutation: CREATE_USER,
            variables: userData
        })
       await console.log("Apollo res.", resp)
    },
    loginUser(ctx, userData) {
        console.log("Context accion login: ", ctx)
        console.log("User accion login:", userData)
    }
}
const mutations = {
    LOGIN_USER(state, payload) {
        state.user = payload
        state.authStatus = true
    },
    SET_TOKEN(state, payload) {
        state.token = payload
    }

}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}