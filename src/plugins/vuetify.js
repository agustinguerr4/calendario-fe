import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#8e59d4',
        accent: '#B44E86',
        danger: '#d23535'
      },
    },
  },
})