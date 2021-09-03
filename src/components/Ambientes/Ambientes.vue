<template>
  <v-container>
    <!-- ENCABEZADO AMBIENTES CON FORMULARIO DE CARGA-->
    <v-card-title class="dark--text white darken-4">
      <v-row>
        <v-col cols="10"></v-col>
        <v-col cols="2" class="flex-end">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color="primary"
                class="text--white"
                fab
              >
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Crear nuevo ambiente</span>
                <v-btn
                  @click="dialog = false"
                  fab
                  color="accent"
                  small
                  class="boton-cerrar-modal"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="8">
                      <v-text-field label="Nombre" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Legal middle name"
                        hint="example of helper text only on focus"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Password*"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        :items="[
                          'Skiing',
                          'Ice hockey',
                          'Soccer',
                          'Basketball',
                          'Hockey',
                          'Reading',
                          'Writing',
                          'Coding',
                          'Basejump',
                        ]"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- CARD AMBIENTE - DEBO LLEVARMELO A UN COMPONENTE EXTERNO DONDE TENGA SU MODAL DE EDICION  -->
    <card-ambiente />
  </v-container>
</template>

<script>
import CardAmbiente from "../Cards/CardAmbiente.vue";
import gql from "graphql-tag";

export default {
  components: { CardAmbiente },
  data: () => ({
    dialog: false,
  }),
  apollo: {
    Ambientes: gql`
      {
        Ambientes {
          nombre
          tipo
          tiempo
          _id
        }
      }
    `,
  },
};
</script>

<style scoped>
.card-ambiente {
  position: relative;
}

.boton-cerrar-modal {
  position: absolute;
  right: 2rem;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>