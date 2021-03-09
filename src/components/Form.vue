<template>
  <div class="Form">

      <v-form v-model="validForm">
        <v-container>
          <v-row>
            Submission Form
          </v-row>
        
          <v-col cols="12" md="24">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
  
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>

              <v-text-field
                v-model="address1"
                :rules="address1Rules"
                label="Address 1"
                required
              ></v-text-field>

              <v-text-field
                v-model="address2"
                label="Address 2"
              ></v-text-field>

              <v-select
                v-model="state"
                :items="stateArray"
                :rules="stateRules"
                required
                label="State"
              ></v-select>

              <v-text-field
                v-model="zipCode"
                label="ZIP Code"
                type="number"
                :rules="zipCodeRules"
                required
              ></v-text-field>

              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                type="number"
                :rules="phoneNumberRules"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :label = "`I agree that my information will be stored`"
                :rules="checkboxRules"
                required
              ></v-checkbox>
          </v-col>

          <v-btn 
            @click="storeFieldValues"
            to='/person-detail'
            :disabled="!validForm"
          >Submit Form</v-btn>

        </v-container>
      </v-form>

    <!--
    <button>
      <router-link to='/person-detail'>Submit Form</router-link>
    </button>
    <router-view />
    -->

  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      validForm: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],

      address1: '',
      address1Rules: [
        v => !!v || 'Address is required',
      ],
      address2: '',

      state: null,
      stateArray: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      stateRules: [
        v => !!v || 'State is required',
      ],

      zipCode: '',
      zipCodeRules: [
        v => !!v || 'ZIP Code is required',
       // digits: 5,
      ],

      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'Phone Number is required',
       // digits: 5,
      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      checkbox: false,
      checkboxRules: [
        v => !!v || 'Agreement is required',
      ],

    }
  },

  mounted() {
    //this.populateStateArray();
  },

  methods: {
    populateStateArray() {

      this.stateArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California',
      'Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia',
      'Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
      'Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
      'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
      'New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio',
      'Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
      'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
      'West Virginia','Wisconsin','Wyoming'];
    },
  

    storeFieldValues() {
      console.log('hello');
    },

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
