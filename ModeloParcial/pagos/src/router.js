//importar la dependecia de vue
import Vue from 'vue'

//importar la dependecia de vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Formulario from './componentes/Formulario.vue'
import Choice from './componentes/Choice.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [       
        { path: '/formulario', component: Formulario },
        { path: '/choice', component: Choice }
    ]
})