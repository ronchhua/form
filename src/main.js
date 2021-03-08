import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './store/store.js'
import routes from './router/routes.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({mode: 'history', routes});

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
