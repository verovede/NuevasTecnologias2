import Vue from 'vue'
import App from './App.vue'

//import Router
import { router } from './router'

//import estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

//import form
import './form'

//import AXIOS//
import './axios'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

