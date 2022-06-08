//importar la dependecia de vue
import Vue from 'vue'

//importar la dependecia de vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './componentes/Home.vue'
import Formulario from './componentes/Formulario.vue'
import Ejercicio from './componentes/Ejercicio.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home}, //Seria el index       
        { path: '/formulario', component: Formulario },
        { path: '/ejercicio', component: Ejercicio },
        
    ]
})
