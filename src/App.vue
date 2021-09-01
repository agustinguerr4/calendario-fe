<template>
  <v-app>
    <div v-if="isLogged">
      <Navbar />
    </div>
    <div v-else>
      <login/>
    </div>
  </v-app>
</template>

<script>
import Login from "./components/Login/Login.vue";
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Login,
  },
  data() {
    return {
      isLogged: false
    };
  },
};
</script>