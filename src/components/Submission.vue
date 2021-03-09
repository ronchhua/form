<template>
  <div class="Submission">
    <v-form v-model="validForm">
      <v-container>
        <v-row>
          Submission Form
        </v-row>
      
        <v-col cols="12" md="24">
            <v-text-field
              v-model="completedForm['firstName']"
              label="First name"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="completedForm['lastName']"
              label="Last name"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="completedForm['address1']"
              label="Address 1"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="completedForm['address2']"
              label="Address 2"
              disabled
            ></v-text-field>

            <v-select
              v-model="completedForm['state']"
              label="State"
              disabled
            ></v-select>

            <v-text-field
              v-model="completedForm['zipCode']"
              label="ZIP Code"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="completedForm['phoneNumber']"
              label="Phone Number"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="completedForm['email']"
              label="E-mail"
              disabled
            ></v-text-field>

        </v-col>

      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Submission',
  data() {
    return {
      completedForm: {
        firstName: null,
        lastName: null,
        address1: null,
        address2: null,
        state: null,
        zipCode: null,
        phoneNumber: null,
        email: null,  
      },
    }
  },

  mounted() {
    
    var storedForm = this.$store.getters.getForm;

    for(var entry in this.completedForm) {
      this.completedForm[entry] = storedForm[entry];
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
