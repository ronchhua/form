import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store( {
    
    //Create a state of each variable
    state: {
        form : {
            firstName: null,
            lastName: null,
            address1: null,
            address2: null,
            state: null,
            zipCode: null,
            phoneNumber: null,
            email: null,
        },
    },

    //Create functions that can modify these states 
    mutations: {  

        setFields(state, newFields) {
            
            for(var field in state.form) {
                state.form[field] = newFields[field];
                //console.log(field, state.form[field]);
            }

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
        getForm (state) {
            return state.form;
        },

    }

});

