<template>
  <div class="Form">

    <div class="formTitle">
      Submission Form
    </div>

    <v-form v-model="validForm">
      <v-container>
          
      
        <v-col cols="12" md="24">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              :counter="20"
              label="First name"
              required
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              :counter="20"
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
          
          :disabled="!validForm"
        >Submit Form</v-btn>

      </v-container>
    </v-form>

    <!-- to='/person-detail' -->

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
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],

      address1: '',
      address1Rules: [
        v => !!v || 'Address is required',
      ],
      address2: '',

      state: null,
      stateArray: [],
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
    this.populateStateArray();
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

      var formEntries = this.completedForm;

      //for(var entry in formEntries) {
      //  formEntries[entry] = 5;
      //}
      formEntries['firstName'] = this.firstName;
      formEntries['lastName'] = this.lastName;
      formEntries['address1'] = this.address1;
      formEntries['address2'] = this.address2;
      formEntries['state'] = this.state;
      formEntries['zipCode'] = this.zipCode;
      formEntries['phoneNumber'] = this.phoneNumber; 
      formEntries['email'] = this.email;

      this.$store.dispatch('saveFields', formEntries);

      this.$router.push('/person-detail');
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
  box-shadow: 2px 0px 30px 30px #0699dd50;
  width: 500px;

  background-color: #0cebf350;

}

.body {
  background-color: #39e6c0cb;
}

.formTitle {
  padding: 20px;
  font-size: 40px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}

</style>
