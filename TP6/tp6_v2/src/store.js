import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        pickedColor: "",
        isHard: true,
        colorCount: 6,
        colors: [],
        colorDisplay: "",
        messageDisplay: "",
        restartButton: ""
    },

    actions: {
        async easy({ commit }) {
            try {
                commit('easy')
            }
            catch (error) { console.log(error) }
        },

        async hard({ commit }) {
            try {
                commit('hard')
            }
            catch (error) { console.log(error) }
        },

        async pickedColor({ commit }, pickedColor) {
            try {
                commit('pickedColor', pickedColor)
            }
            catch (error) { console.log(error) }
        },

        async colors({ commit }, colors) {
            try {
                commit('set_colors', colors)
            }
            catch (error) { console.log(error) }
        },

        async finDelJuego({ commit }, estado) {
            try {
                commit('set_estadoJuego', estado)
            }
            catch (error) { console.log(error) }
        },

        async actualizarColores({ commit }, color) {
            console.log("que color vino", color)
            try {
                commit('actualizar_colores', color)
            }
            catch (error) { console.log(error) }
        },
    },

    mutations: {


        easy(state) {
            console.log("Boton easy apretado");
            state.isHard = false;
            state.colorCount = 3;

        },

        hard(state) {
            console.log("Boton hard apretado");
            state.isHard = true;
            state.colorCount = 6;


        },

        pickedColor(state, color) {
            console.log("pickedColor");
            state.pickedColor = color;



        },

        set_colors(state, colors) {
            console.log("colors");
            state.colors = colors;



        },

        set_estadoJuego(state, estado) {
            console.log("estado");
            state.estadoJuego = estado;



        },

        actualizar_colores(state, color) {
            let colorsAux = []
            for (let i = 0; i < state.colors.length; i++) {



                colorsAux.push(color)
                console.log(state.colors[i])


            }
            state.colors = colorsAux
            state.colorDisplay = color




        },

    },

})



