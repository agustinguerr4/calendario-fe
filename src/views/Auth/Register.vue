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

                    <div >
                      <v-text-field
                        v-model="userReg.email"
                        light="light"
                        prepend-icon="mdi-email"
                        label="Correo Electrónico"
                        type="email"
                        name="registro-email"
                        color="primary"
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
                        class="mb-3"
                        @click="register"
                        >Registrarse</v-btn
                      >
                      
                      </div>
                  </v-form>
                </v-card-text>
              </v-card>
                <div class="box-registrarse">
                <span class="mr-5"> Ya tenés una cuenta?</span>

          <router-link to="/login">
                <v-btn light="light" 
                  >Logueate</v-btn
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
  data() {
    return {
      userReg: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
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
     register: function() {
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
