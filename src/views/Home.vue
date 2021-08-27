<template>
  <div>
    <div v-for="(ambiente, index) in Ambientes" :key="index">
      <h3>Ambiente</h3>
      <h4>Nombre:</h4>
      {{ ambiente.nombre }}

      <h4>Tipo:</h4>
      {{
        (ambiente.tipo == 0 && "Indoor") ||
        (ambiente.tipo == 1 && "Outdoor") ||
        (ambiente.tipo == 2 && "Esquejador")
      }}

      <h4>Exposicion:</h4>
      {{ ambiente.tiempo }}hs.

      <h4>ID:</h4>
      {{ ambiente._id }}
    </div>

    <hr />

    <div v-for="(planta, index) in Plantas" :key="index">
      <h3>Planta</h3>

      <h4>Nombre:</h4>
      {{ planta.nombre }}

      <h4>Origen:</h4>
      {{
        (planta.origen == 0 && "Samilla") || (planta.origen == 1 && "Esqueje")
      }}

      <h4>Etapa:</h4>
      {{
        (planta.etapa == 0 && "Enraizamiento") ||
        (planta.etapa == 1 && "Vegetación") ||
        (planta.etapa == 2 && "Floración")
      }}

      <h4>ID:</h4>
      {{ planta._id }}
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Home",
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
    Plantas: gql`
      {
        Plantas {
          nombre
          origen
          etapa
          _id
        }
      }
    `,
  },
};
</script>
