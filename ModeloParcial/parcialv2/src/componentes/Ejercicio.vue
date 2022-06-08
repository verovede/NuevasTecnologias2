<template>
  <section>
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
            <td>{{ choice.pregunta }}</td>
            <td>
              <p>{{ choice.opciones.a }}</p>
              <p>{{ choice.opciones.b }}</p>
              <p>{{ choice.opciones.c }}</p>
              <p>{{ choice.opciones.d }}</p>
              <p>{{ choice.opciones.e }}</p>
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
      choices: [
        {
          nroPregunta: 1,
          pregunta: "¿Cual de estas directivas nos permite doble data binding?",
          opciones: {
            a: "a) v-text",
            b: "b) v-on",
            c: "c) v-model",
            d: "d) v-bind",
            e: "e) v-for",
          },
          respuesta: "C",
        },

        {
          nroPregunta: 2,
          pregunta:
            "<field-messages> es un elemento de vue-form que permite:",
          opciones: {
            a: "a) Guardar los datos del formulario",
            b: "b) Deshabilitar las validaciones de HTML5",
            c: "c) Contener los mensajes de validación",
            d: "d) Ingresar nuevos datos",
          },
          respuesta: "C",
        },

        {
          nroPregunta: 3,
          pregunta: "¿Que permite vue-router?" ,
          opciones: {
            a: "a) Conecta dos componentes entre sí",
            b: "b) Permite enlazar URLs a componentes específicos",
            c: "c) Envía peticiones al servidor",
            d: "d) Envía los datos recibidos a los componentes",
          },
          respuesta: "B",
        },
      ],
    };
  },
  methods: {},
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
