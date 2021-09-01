<template>
<v-container>
  <div v-for="ambiente,index in Ambientes" :key="index">

  <card-ambiente 
  :nombre="ambiente.nombre"
  :tipo="ambiente.tipo"
  :tiempo="ambiente.tiempo"/>
  </div>
</v-container>
</template>

<script>
import CardAmbiente from '../Cards/CardAmbiente.vue'
import gql from "graphql-tag";

export default {
  components: { CardAmbiente },
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
  }
}
</script>

<style>

</style>