<template>
  <div>
    <v-bottom-navigation
      class="menu-superior-container"
      v-model="value"
      color="accent"
    >
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        :value="item.title"
        :to="item.to"
        class="menu-superior-btn"
        color="primary"
      >
        <span>
          {{ item.title }}
        </span>
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-btn>
      <v-btn
        @click.stop="drawer = !drawer"
        color="primary"
        class="menu-superior-btn"
      >
        <span>Más</span>
        <v-icon>{{ "mdi-menu" }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-card class="navbar-container">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
        :mini-variant.sync="mini"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Agustin G.</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in itemsLarge"
            :key="item.title"
            link
            :to="item.to"
          >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Inicio", icon: "mdi-apps", to: "/" },
        { title: "Ambientes", icon: "mdi-home-heart", to: "/ambientes" },
        { title: "Plantas", icon: "mdi-tree-outline", to: "/plantas" },
        {
          title: "Calendario",
          icon: "mdi-calendar-outline",
          to: "/calendario",
        },
      ],
      itemsLarge: [
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
.navbar-container {
  min-height: 100vh;
}

.menu-superior-container {
  display: flex;
  align-items: center;
}
.menu-superior-btn {
  background-color: transparent;
  padding: 2rem !important;
}
</style>
