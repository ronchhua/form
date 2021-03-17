<template>
  <v-app>
    <v-main>
    <button class="addUserButton">
      <router-link to='/person-form'>Add User</router-link>
      <router-view />
    </button>
    
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      height: 1576,
      width: 764,
    }
  },

  mounted() {
    window.addEventListener('resize', this.resizeElements);
    this.resizeElements();
  },

  methods: {
    resizeElements: function () {
        // Calculate new canvas size based on window
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.$nextTick(() => {
          // Redraw elememts
        });
    },

    routeToForm() {
      this.$router.push({ path: '/person-form' });
    }
  },


}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #abf1e0;

}

body {
  background-color: #abf1e0;
}


</style>
