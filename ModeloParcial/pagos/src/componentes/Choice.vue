<template>
  <section class="src-componentes-choise">
    <div class="table-responsive">
      <table class="table table-dark text-left">
        <tr>
          <th>Numero Pregunta</th>
          <th>Pregunta</th>
          <th>Opciones</th>
          <th>Respuesta </th>
        </tr>

        <tr v-for="(pregunta, index) in preguntas" :key="index">
          <td>
            {{ pregunta.numero }}
          </td>
          <td>
            {{ pregunta.pregunta }}
          </td>
          <td>
            {{ pregunta.opciones }}
          </td>
          <td>
            {{ pregunta.respuesta }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-choise',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: 
          [
            {
              numero: 1,
              pregunta: '¿Qué es un componente en Vue.js?',
              opciones: `a) Son elementos personalizados reutilizables  b) Una herramienta de desarrollo`,
                        
              respuesta: 'a, c'},

            {
              numero: 2,
              pregunta: '¿Que función cumple el modificador number aplicado a v-model?',
              opciones: '',
              respuesta: 'a, c'},

            {
              numero: 3,
              pregunta: 'vue create se utiliza para',
              opciones: '',
              respuesta: 'a, c'},
          ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
