<template>
  <div class="Form">

      <v-form v-model="valid">
        <v-container>
<v-col cols="12" md="24">
          <!--<v-row>-->
            <!--<v-col cols="12" md="4">-->
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            <!--</v-col>-->
          <!--</v-row>-->

          <!--<v-row>-->
            <!--<v-col cols="12" md="4">-->
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            <!--</v-col>-->
          <!--</v-row>-->

          <!--<v-row>-->
            <!--<v-col cols="12" md="4">-->
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            <!--</v-col>-->
          <!--</v-row>-->
</v-col>
        </v-container>
      </v-form>

    <button>
      <router-link to='/person-detail'>Submit Form</router-link>
    </button>
    <router-view />
    <!-- Button onclick do <router-link to='/person-detail'>Submission</router-link> -->
    
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  box-shadow: 2px 0px 30px 10px #0699dd50;

}



</style>
