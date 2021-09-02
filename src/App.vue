<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "App",
  components: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isAuth: 'Auth/isAuth'
    })
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>