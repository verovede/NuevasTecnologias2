import Vue from 'vue'
import App from './App.vue'

//import bootstrap & afines
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

// importo el form
import './form'

//configuracion del router
import { router } from './router'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
