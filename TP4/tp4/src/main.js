import Vue from 'vue'
import App from './App.vue'

//Aca agrego los imports que voy a necesitar
import 'bootstrap/dist/css/bootstrap.min.css'
import './form'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './axios'


//configuracion del router
import { router } from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

