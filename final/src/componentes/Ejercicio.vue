<template>
  <section class="src-componentes-ejercicio">
    <h1>Ejercicio Final</h1>
    <div class="m-3">
      Color: <input type="text" v-model="color" /> Fondo:
      <input type="text" v-model="fondo" /> Size:
      <input type="text" v-model="size" />
    </div>

    <div class="m-3">
      <textarea
        type="text"
        v-model.trim="texto"
        :style="getStyle()"
        class="text-center"
      >
      </textarea>
    </div>

    <div class="m-3">Cantidad de palabras: {{ contarPalabras() }}</div>

    <div class="jumbotron">
      <h1>Cuestionario Choice</h1>
      <div class="table-responsive">
        <table class="table">
          <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th>Opciones</th>
            <th>Respuesta</th>
          </tr>

          <tr v-for="(choice, index) in choices" :key="index">
            <td>{{ choice.nroPregunta }}</td>
            <td class="text-left">{{ choice.pregunta }}</td>
            <td class="text-left">
              <p>{{ choice.opciones.a }}</p>
              <p>{{ choice.opciones.b }}</p>
              <p>{{ choice.opciones.c }}</p>
              <p>{{ choice.opciones.d }}</p>
            </td>

            <td class="respuesta">{{ choice.respuesta }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-ejercicio",
  props: [],
  mounted() {},
  data() {
    return {
      color: "orange",
      fondo: "black",
      size: "200",
      texto: "Ingrese Texto Aqui",

      choices: [
        {
          nroPregunta: 1,
          pregunta: "¿Que es Axios?",
          opciones: {
            a: "a) Es una librería de Storage",
            b: "b) Es una biblioteca de cliente http",
            c: "c) Maneja la comunicación entre los componentes",
            d: "d) Configura el routing de mi aplicación Vue.js",
          },
          respuesta: "B",
        },

        {
          nroPregunta: 2,
          pregunta: "Con Axios se pueden implementar los verbos",
          opciones: {
            a: "a) Solo Post",
            b: "b) Solo Post y Get",
            c: "c) Get, Post, Put y Delete",
            d: "d) Solo Put",
          },
          respuesta: "C",
        },

        {
          nroPregunta: 3,
          pregunta: "¿Que es Vuex?",
          opciones: {
            a: "a) Es una librería con servicios de comunicación",
            b: "b) Es una librería que maneja el estado de nuestras aplicaciones",
            c: "c)  Es un complemento para validar formularios",
            d: "d) Es una herramienta que soporta el formato jsx",
          },
          respuesta: "B",
        },

        {
          nroPregunta: 4,
          pregunta: "Las acciones en su implementación permiten lógica ...",
          opciones: {
            a: "a) Sólo asincrónica",
            b: "b) Sólo sincrónica ",
            c: "c) No permiten lógica, sólo llaman a una mutación",
            d: "d) Asincrónica y sincrónica",
          },
          respuesta: "C",
        },

        {
          nroPregunta: 5,
          pregunta: "Las mutaciones …",
          opciones: {
            a: "a) Se llaman a través del método dispatch",
            b: "b) Llaman a una acción",
            c: "c)  No son necesarias para cambiar el estado",
            d: "d) Alteran directamente el estado de nuestra aplicación",
          },
          respuesta: "D",
        },
      ],
    };
  },
  methods: {
    getStyle() {
      return `background: ${this.fondo}; color:  ${this.color}; width:  ${this.size}px `;
    },
    contarPalabras() {
      let numero = this.texto.split(" ").length;
      return numero;
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: hotpink;
  color: black;
}
.table {
  background: white;
}

.respuesta {
  text-align: center;
  font-size: 20px;
}
</style>
