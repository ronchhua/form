import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store( {
    
    //Create a state of each variable
    state: {
        firstName: null,
        lastName: null,
        address1: null,
        address2: null,
        state: null,
        zipCode: null,
        phoneNumber: null,
        email: null,
    },

    //Create functions that can modify these states 
    mutations: {  
        setFields(state, newFields) {
            state.firstName = newFields['firstName'];
            state.lastName = newFields['lastName'];
            state.address1 = newFields['address1'];
            state.address2 = newFields['address2'];
            state.state = newFields['state'];
            state.zipCode = newFields['zipCode'];
            state.phoneNumber = newFields['phoneNumber'];
            state.email = newFields['email'];
        },
    },

    //Calls mutations asynchronously, mutations occur synchronously
    actions: {
        saveFields(context, fields) {
            context.commit('setFields', fields);
        },
    },

    //Gets values of states.
    getters: {
        getFirstName (state) {
            return state.firstName;
        },
        getLastName (state) {
            return state.lastName;
        },
        getAddress1 (state) {
            return state.address1;
        },
        getAddress2 (state) {
            return state.address2;
        },
        getState (state) {
            return state.state;
        },
        getZipCode (state) {
            return state.zipCode;
        },
        getPhoneNumber (state) {
            return state.phoneNumber;
        },
        getEmail (state) {
            return state.email;
        },
        getForm (state) {
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                address1: state.address1,
                address2: state.address2,
                state: state.state,
                zipCode: state.zipCode,
                phoneNumber: state.phoneNumber,
                email: state.email,
            }
        }
    }
});

