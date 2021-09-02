<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fill-height="fill-height">
          <v-layout align-center="align-center" justify-center="justify-center">
            <v-flex class="login-form text-xs-center">
             
              <v-card light="light">
                <v-card-text>
                  <v-form @submit.prevent>
                    <div>
                      <v-text-field
                        v-model="userLog.username"
                        light="light"
                        prepend-icon="mdi-account"
                        label="Usuario o E-mail"
                        type="email"
                        name="login-username"
                      ></v-text-field>
                      <v-text-field
                        v-model="userLog.password"
                        light="light"
                        prepend-icon="mdi-lock"
                        label="Contraseña"
                        type="password"
                        name="login-password"
                      ></v-text-field>
                      <v-btn @click="login" block="block" type="submit"
                        >Iniciar Sesión</v-btn
                      >
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
              <div class="box-registrarse">
                <span class="mr-5"> No tenés una cuenta?</span>

          <router-link to="/register">
                <v-btn light="light" 
                  >Registrarse</v-btn
                ></router-link>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ["isLogged"],
  data() {
    return {
      userLog: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
       this.loginUser(this.userLog)
    },

    ...mapActions({
      loginUser: 'Auth/loginUser'
    })
  
  }
};
</script>
<style scoped>
.box-registrarse {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.login-form {
  max-width: 500px;
}
</style>
