//importar la dependecia de vue
import Vue from 'vue'

//importar la dependecia de vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Inicio from './componentes/Inicio.vue'
import Formulario from './componentes/Formulario.vue'
import Usuario from './componentes/Usuario.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect:  '/inicio'}, 
        { path: '/inicio', component: Inicio },
        { path: '/formulario', component: Formulario },
        { path: '/usuario', component: Usuario }
    ]
})