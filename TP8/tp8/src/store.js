//importar la dependecia de vue
import Vue from 'vue'

//importar la dependecia de Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'




export default new Vuex.Store({
    state: {
        usuarios: [],
        
    },

    actions: {
        async getUsuarios({ commit }) {
            try {
                const usuarios = await axios.get('https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/')
                commit('GET_Usuarios', usuarios.data)

            }
            catch (error) {
                alert(error)
                console.log('ENTRA ACA' + error)
            }
        },

        async deleteUsuarios({ commit }, id) {
            try {
                const { data: usuario } = await axios.delete('https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/' + id)
                commit('DELETE_Usuario', usuario)

            }
            catch (error) {
                alert(error)
                console.log('ENTRA ACA' + error)
            }
        },

        async putUsuario({ commit }, usuarioNuevo) {
            try {
                const { data: usuario } = await axios.post('https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/', usuarioNuevo, {'content-type' : 'application/json'})
                commit('POST_Usuario', usuario)

            }
            catch (error) {
                alert(error)
                console.log('ENTRA ACA' + error)
            }
        },
    },
    mutations: {
        GET_Usuarios(state, data) {
            state.usuarios = data
        },

        DELETE_Usuario(state, data) {
            let index = state.usuarios.findIndex(usuario => usuario.id == data.id)
            if (index == -1) throw new Error('usuario no encontrado')
            state.usuarios.splice(index, 1)
        },

        POST_Usuario(state, data) {            
            state.usuarios.push(data)           
        }
    }

})



