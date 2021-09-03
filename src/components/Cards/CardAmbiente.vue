<template>
  <v-row dense>
    <v-col cols="12">
      <v-card color="#8D517B" dark class="card-ambiente">
        <v-img class="imagen-encabezado" src="../../assets/out.jpeg" height="200px"></v-img>

        <v-card-title class="text-h5"> Nombre del ambiente </v-card-title>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="boton-editar"
              color="secondary"
              elevation="2"
              fab
              small
              ><v-icon>mdi-book-edit</v-icon></v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Editar ambiente</span>
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
        <v-btn class="boton-eliminar" color="danger" elevation="2" fab small
          ><v-icon>mdi-delete</v-icon></v-btn
        >

        <v-card-subtitle>Tipo - Watts - Dimensiones</v-card-subtitle>

        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-thermometer</v-icon>
            </template>
            <span>Temperatura: 21º C</span>
          </v-tooltip>
          21º C

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="ml-4 mr-1"
                >mdi-water</v-icon
              >
              78%
            </template>
            <span>Humedad: 78 %</span>
          </v-tooltip>
          78%

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="ml-4 mr-1"
                >mdi-tree</v-icon
              >
            </template>
            <span>Plantas: 8</span>
          </v-tooltip>
          8

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="ml-4 mr-1"
                >mdi-clock</v-icon
              >
            </template>
            <span>Encendido 8:00hs - Apagado 20:00hs</span>
          </v-tooltip>
          8:00hs - 20:00hs
        </v-card-actions>

        <v-btn color="primary" large class="boton-ver"
          ><v-icon>VER AMBIENTE</v-icon></v-btn
        >
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: [],
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.card-ambiente {
  position: relative;
}

.boton-editar {
  position: absolute;
  top: 1rem;
  right: 4rem;
}

.boton-eliminar {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.boton-cerrar-modal {
  position: absolute;
  right: 2rem;
}

.boton-ver {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.imagen-encabezado{
  object-fit: cover;
}
</style>