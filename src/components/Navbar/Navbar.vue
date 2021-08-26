<template>
  <v-card class="navbar-container">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      fixed
      :mini-variant.sync="mini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main> <router-view /></v-main>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Inicio", icon: "mdi-apps", to: "/" },
        { title: "Ambientes", icon: "mdi-home-heart", to: "/ambientes" },
        { title: "Plantas", icon: "mdi-tree-outline", to: "/plantas" },
        {
          title: "Calendario",
          icon: "mdi-calendar-outline",
          to: "/calendario",
        },
        {
          title: "Configuración",
          icon: "mdi-cog-outline",
          to: "/configuracion",
        },
      ],
      mini: false,
    };
  },
};
</script>

<style scoped>
.navbar-container{
    min-height: 100vh;
}
</style>
