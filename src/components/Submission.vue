<template>
  <div class="Submission">

    <div class="submissionTitle">
      Submission Answers
    </div>


    <v-form>
      <v-container>
      
        <v-col cols=auto md="24">
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

            <v-text-field
              v-model="completedForm['state']"
              label="State"
              disabled
            ></v-text-field>

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
.submissionTitle {
  padding: 20px;
  font-size: 40px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
</style>
