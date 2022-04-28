new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },
        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true
        },
        atacar: function () {

            // calculo del golpe del jugador al monstruo
            var saludPerdida = this.calcularHeridas(this.rangoAtaque[0],this.rangoAtaque[1])
            this.saludMonstruo -= saludPerdida

            //agrego al log
            this.registrarEvento({
                esJugador: true,
                text: `El jugador golpea al monstruo por ${saludPerdida}`
            })

            console.log(`Salud Monstruo: -(${saludPerdida}) = ${this.saludMonstruo}`)
            this.ataqueDelMonstruo()
            this.verificarGanador()
        },

        ataqueEspecial: function () {
            // calculo del golpe del monstruo al jugador
            var saludPerdida = this.calcularHeridas(this.rangoAtaqueEspecial[0],this.rangoAtaqueEspecial[1])
            this.saludMonstruo -= saludPerdida

            //agrego al log
            this.registrarEvento({
                esJugador: true,
                text: `El jugador golpea al monstruo por ${saludPerdida}`
            })

            console.log(`Salud Monstruo: -(${saludPerdida}) = ${this.saludMonstruo}`)
            this.ataqueDelMonstruo()
            this.verificarGanador()
        },

        ataqueDelMonstruo: function () {
            // calculo del golpe del monstruo al jugador
            var saludPerdida = this.calcularHeridas(this.rangoAtaqueDelMonstruo[0],this.rangoAtaqueEspecial[1])
            this.saludJugador -= saludPerdida

            //agrego al log
            this.registrarEvento({
                esJugador: false,
                text: `El monstruo golpea al jugador por ${saludPerdida}`
            })

            console.log(`Salud Jugador: -(${saludPerdida}) = ${this.saludJugador}`)
        },

        curar: function () {

            if (this.saludJugador <= 90) {
                this.saludJugador += 10

                //agrego al log
                this.registrarEvento({
                    esJugador: true,
                    text: `El jugador recupera 10`
                })

                this.ataqueDelMonstruo()
                this.verificarGanador()
            } else { window.alert('Tenes que tener menos de 90!') }


        },

        registrarEvento(evento) {
            this.turnos.unshift(evento)
        },

        terminarPartida: function () {
            this.hayUnaPartidaEnJuego = false
            this.saludJugador = 100
            this.saludMonstruo = 100
            this.turnos = []
        },

        calcularHeridas: function (min,max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        verificarGanador: function () {
            if (this.saludMonstruo <= 0) {
                window.alert(`Gano Jugador! con ${this.saludJugador} | Monstruo: ${this.saludMonstruo} `)
                this.terminarPartida()
            } else if (this.saludJugador <= 0) {
                window.alert(`Gano Monstruo! con ${this.saludMonstruo} | Jugador: ${this.saludJugador} `)
                this.terminarPartida()
            }
        },
        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        },

    }
});

