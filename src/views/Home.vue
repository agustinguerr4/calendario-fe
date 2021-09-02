<template>
  <div>
    Soy el inicio
    {{ Users }}
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Home",
  apollo: {
    Users: gql`
      query {
        Users {
          _id
          username
          email
          password
          token
          createdAt
        }
      }
    `,
  },
};
</script>

<style>
.v-main__wrap {
  padding: 1rem;
}
@media screen and (min-width: 769px) {
  .v-main__wrap {
    margin-left: 4rem;
  }
}
</style>