<template>
  <v-app>
    <!-- <v-app-bar
      app
      dark
    >
      <router-link to="/">
        <div class="d-flex align-center">
          <span class="mx-2 headline">NemesisCodes&trade;</span>
        </div>
      </router-link>
      

      <v-spacer></v-spacer>

      <v-btn text to="/about">About</v-btn>
    </v-app-bar> -->

    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }
</style>