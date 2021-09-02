import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueScreen from 'vue-screen';
import VueApollo from 'vue-apollo'
import { createProvider } from './vue-apollo.js';

Vue.config.productionTip = false
Vue.use(VueScreen)
  .use(VueApollo)

const { apolloProvider, apolloClient } = createProvider();

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  apolloClient,
  render: h => h(App)
}).$mount('#app')