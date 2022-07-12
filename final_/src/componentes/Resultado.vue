<template >
  <section>
    <div class="m-3">
      <textarea
        type="text"
        v-model.trim="texto"
        :style="estilos"
        class="text-center"
      >
      </textarea>
    </div>

    <div class="m-3">Cantidad de palabras: {{ contarPalabras() }}</div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-resultado",
  props: ["estilos"],
  mounted() {},
  data() {
    return {
      texto: "Ingrese Texto Aqui",
    };
  },
  methods: {
    contarPalabras() {
      let numero = this.texto.split(" ").length;
      return numero;
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
</style>
