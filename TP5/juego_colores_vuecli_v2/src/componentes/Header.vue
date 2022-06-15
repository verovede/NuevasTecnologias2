<template>
  <section>
    <div class="header" :style="{ background: getColor(pickedColor) }">
      <h1>
        The Great <br />
        <span class="colorDisplay">{{ pickedColor }}</span>
        <br />
        Guessing Game
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-encabezado",
  props: ["pickedColor","estadoJuego"],
  mounted() {},
  data() {
    return {
      colorDisplay: "",
      juegoWin: false,
    };
  },
  methods: {
    getColor(pickedColor) {
      let bgColor = "steelblue";
      if (this.estadoJuego) {
        this.juegoWin = this.estadoJuego
        bgColor = pickedColor;
      }
      return bgColor;
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.colorDisplay {
  font-size: 200%;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}

.header {
  transition: all 0.3s;

  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
</style>
