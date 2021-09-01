<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fill-height="fill-height">
          <v-layout align-center="align-center" justify-center="justify-center">
            <v-flex class="login-form text-xs-center">
              <div class="display-1 mb-3">
                <v-icon class="mr-2" large="large">{{ "mdi-login" }}</v-icon>
                Iniciar sesión
              </div>
              <v-card light="light">
                <v-card-text>
                  <div class="subheading">
                    <template v-if="options.isLoggingIn"
                      >Iniciar sesión</template
                    ><template v-else>Registrarse</template>
                  </div>
                  <v-form @submit.prevent>
                    <div v-if="options.isLoggingIn">
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

                      <v-checkbox
                        v-model="options.shouldStayLoggedIn"
                        light="light"
                        label="Mantenerse conectado"
                        hide-details="hide-details"
                        name="login-stay"
                      ></v-checkbox>
                      <v-btn @click="login" block="block" type="submit"
                        >Iniciar Sesión</v-btn
                      >
                    </div>

                    <div v-else>
                      <v-text-field
                        v-model="userReg.email"
                        light="light"
                        prepend-icon="mdi-email"
                        label="Correo Electrónico"
                        type="email"
                        name="registro-email"
                      ></v-text-field>

                      <v-text-field
                        v-model="userReg.username"
                        light="light"
                        prepend-icon="mdi-account"
                        label="Usuario"
                        type="text"
                        name="registro-username"
                      ></v-text-field>

                      <!-- <v-text-field
                        v-model="userReg.age"
                        light="light"
                        prepend-icon="mdi-odnoklassniki"
                        label="Edad"
                        type="text"
                        name="registro-age"
                      ></v-text-field> -->

                      <v-text-field
                        v-model="userReg.password"
                        light="light"
                        prepend-icon="mdi-lock"
                        label="Contraseña"
                        type="password"
                        name="registro-password"
                      ></v-text-field>

                      <v-text-field
                        v-model="userReg.confirmPassword"
                        light="light"
                        prepend-icon="mdi-lock"
                        label="Confirmar contraseña"
                        type="password"
                        name="registro-confirm-password"
                      ></v-text-field>

                      <v-btn
                        block="block"
                        type="submit"
                        @click="register"
                        >Registrarse</v-btn
                      >
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
              <div v-if="options.isLoggingIn" class="box-registrarse">
                <span class="mr-5"> No tenés una cuenta?</span>

                <v-btn light="light" @click="options.isLoggingIn = false"
                  >Registrarse</v-btn
                >
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
      <v-footer app="app">
        <v-flex class="text-center"
          >© 2021. Todos los derechos reservados.</v-flex
        >
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ["isLogged"],
  data() {
    return {
      userReg: {
        username: "",
        // age: 18,
        email: "",
        password: "",
        confirmPassword: "",
      },
      userLog: {
        username: "",
        password: ""
      },
      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: true,
      },
    };
  },
  methods: {
    login: function() {
      console.log("LOGIN METH: ",this.userLog)
       this.loginUser(this.userLog)
    },
     register: function() {
      console.log("REGISTER METH: ",this.userReg)
       this.createUser(this.userReg)
    },

    ...mapActions('Auth', ['createUser', 'loginUser'])
  
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
