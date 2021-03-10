<template>
  <v-app>
  <!--<div id="app" v-bind:width="width" v-bind:height="height">-->
    <v-main>
      
    <button class="addUserButton">
      <router-link to='/person-form'>Add User</router-link>
      <router-view />
    </button>

    </v-main>
    <!--
    <v-btn 
      :to='/person-form'
    >Add User</v-btn>
    -->
    <!--<button @click="$router.push('/person-form')">Add User</button>-->
  <!--</div>-->
  </v-app>
</template>

<script>

//import Form from './components/Form.vue'
//import Submission from './components/Submission.vue'

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
}



</style>
