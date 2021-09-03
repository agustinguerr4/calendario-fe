<template>
  <div>
    <v-app-bar color="primary accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="secondary" @click="logOut()">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Cerrar sesión</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-icon>mdi-view-dashboard</v-icon>
              <v-list-item-title class="ml-2">Inicio</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/ambientes">
            <v-list-item>
              <v-icon>mdi-home-assistant</v-icon>
              <v-list-item-title class="ml-2">Ambientes</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/plantas">
            <v-list-item>
              <v-icon>mdi-tree</v-icon>
              <v-list-item-title class="ml-2">Plantas</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/calendario">
            <v-list-item>
              <v-icon>mdi-calendar</v-icon>
              <v-list-item-title class="ml-2">Calendario</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/calculadora">
            <v-list-item>
              <v-icon>mdi-calculator</v-icon>
              <v-list-item-title class="ml-2">Calculadora</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/reprocann">
            <v-list-item>
              <v-icon>mdi-check-decagram</v-icon>
              <v-list-item-title class="ml-2">Reprocann</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../../router";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  methods: {
    logOut: function () {
      localStorage.removeItem("apollo-token");
      localStorage.removeItem("authStatus");
      this.salir();
      router.push("/login");
    },
    ...mapActions({
      salir: "Auth/cerrarSesion",
    }),
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>