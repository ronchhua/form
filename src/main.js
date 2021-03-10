import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import {store} from './store/store.js'
import router from './router/index.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
