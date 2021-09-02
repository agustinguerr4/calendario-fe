<template>
  <div class="dashboard">
    <navbar />
      <router-view/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style>

</style>