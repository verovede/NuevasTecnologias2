<template>
  <section>
    <div class="navigator">
      <button @click="reset()">
        {{ restartButton }} {{ resetEstado }}
      </button>

      <span class="message">{{ mensaje }} </span>

      <button @click="easy()" :class="{ selected: !isHard }">
        {{ easyButton }}
      </button>

      <button @click="hard()" :class="{ selected: isHard }">
        {{ hardButton }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-navigator",
  props: ["mensaje", "estadoJuego", "resetEstadodelhijo"],
  mounted() {
    this.restart();
  },

  updated() {
    console.log("updated -> NAVIGATOR");
  },

  data() {
    return {
      colors: [],
      pickedColor: "",
      colorCount: 6,

      isHard: true,
      messageDisplay: "",
      restartButton: "New Colors",
      easyButton: "Easy",
      hardButton: "Hard",
      resetEstado: false,
    };
  },
  methods: {
    reset() {
      if (this.resetEstado) {
        this.resetEstado = false;
        this.messageDisplay = "";
        console.log("entra por true")
      }
      else {
        this.resetEstado = true;
        console.log("entra por false")
      }

      this.restart();
    },

    restart() {
      console.log("Boton re start apretado");
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
      this.messageDisplay = "";
      // ENVIO A APP EL COLOR ELEGIDO,ARRAY DE COLORES     
      this.$emit("pickedColor", this.pickedColor);
      this.$emit("colors", this.colors);
      this.$emit("resetEstado", this.resetEstado);
      console.log("estado boton " + this.resetEstado);
      
    },

    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },

    PickColor() {
      var quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },

    createRandomStringColor() {
      var newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      //	console.log(newColor);
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },

    easy() {
      console.log("Boton easy apretado");
      this.isHard = false;
      this.colorCount = 3;
      this.restart();
    },

    hard() {
      console.log("Boton hard apretado");
      this.isHard = true;
      this.colorCount = 6;
      this.restart();
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.message {
  color: #000;
  display: inline-block;
  width: 20%;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
.selected {
  background-color: steelblue;
  color: white;
}
</style>
