import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store( {
    
    //Create a state of some variable
    state: {
        
    },

    //Create functions that can modify these states 
    mutations: {  
/*
        updateCoordinates (state) {

        },

        initCanvas(state, canvas) {
            state.canvas = canvas;
        },

        storeImageElements(state, image) {
            state.imageElements.push(image);
        },

        clearPositions(state) {

        },
        */
    },

    //Calls mutations asynchronously, mutations occur synchronously
    actions: {
   /*     rotateAction (context, degrees) {
            if(this.state.rotation == 360) {
                this.state.rotation = 0;
            }
            context.commit('rotateClockwise', degrees);
        },
        setCanvas (context, canvas) {
            context.commit('initCanvas', canvas);
        },
*/

    },

    //Gets values of states.
    getters: {
        /*getRotation (state) {
            return state.rotation;
        },
*/
    }

});

