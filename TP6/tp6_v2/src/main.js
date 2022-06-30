import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

/*GLOBAL MIXINS */
import './globalMixins'

/*VUEX IMPORTAR STORE / va store from porque importa solo el exporta el default*/
import store from './store'

Vue.config.productionTip = false

new Vue({
  store : store,
  render: h => h(App),
}).$mount('#app')
