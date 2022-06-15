<template>
  <section>
    <div class="container">
      <Square
        v-for="(color, index) in colors"
        :key="index"
        :color="getColor(index)"
        :pickedColor="pickedColor"
        :juegoFinalizado="juegoFinalizado"
        @resultadoHijo="setEstadoJuegoFinalizado((resultadoHijo = $event))"
      />

      <p style="color=white">ESTADO HIJO {{ resultadoQVuelve }}</p>
      <p style="color=white">ESTADO JUEGO{{ juegoFinalizado }}</p>
      <p style="color=white">RESET{{ resetEstado }}</p>
    </div>
  </section>
</template>

<script>
import Square from "./Square.vue";

export default {
  name: "src-componentes-container",

  props: ["colors", "pickedColor", "resetEstado"],

  components: {
    Square,
  },

  mounted() {},
  updated() {
    console.log("updated -> CONTAINER");
   
  },

  data() {
    return {
      juegoFinalizado: false,
      resultadoQVuelve: false,
     
    };
  },
  methods: {
    getColor(index) {
      let colorcito = this.colors[index];

      if (this.juegoFinalizado) {
        colorcito = this.pickedColor;

        this.$emit("mensaje", "You Picked Right!");
        this.$emit("estadoJuego", this.juegoFinalizado);
      }

      if (this.resetEstado) {
      
        this.juegoFinalizado = false;
        this.$emit("resetEstadodelhijo", true);
        console.log("esta entrenado por reset true " + this.resetEstado )
        this.$emit("estadoJuego", this.juegoFinalizado);
      }

      return colorcito;
    },

    setJuegoFinalizado(estado) {
      this.juegoFinalizado = estado;
      return this.juegoFinalizado;
    },

    setEstadoJuegoFinalizado(resultadoHijo) {
      if (resultadoHijo) {
        this.juegoFinalizado = resultadoHijo;
      } else {
        this.$emit("mensaje", "Try Again!");
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.container {
  margin: 20px auto;
  max-width: 600px;
  color: white;
}
</style>
