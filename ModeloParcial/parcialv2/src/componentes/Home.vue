<template>
  <section class="src-componentes-home">
    <div class="container">
      <h1>Enunciado</h1>
      <h2>Proyecto</h2>
      <p>
        Crear una aplicación Vue CLI 2 para ingresar las notas de los alumnos
        que rindieron un examen de ingreso.
      </p>

      <p>
        El proyecto debe poseer dos vistas manejadas por un router y linkeadas a
        una barra de navegación. En una de las vistas se encontrará un
        formulario para el ingreso de la nota de cada alumno y por debajo una
        tabla con la representación de toda la información ingresada. En la
        segunda vista presentar los resultados del múltiple choice (el formato
        se detalla más abajo)
      </p>

      <p>El formulario contendrá campos separados</p>

      <ul>
        <li>
          nombre: obligatorio, entre 3 y 15 caracteres, sin espacios por delante
          ni por detrás ó intermedios
        </li>
        <li>
          apellido: obligatorio, entre 3 y 15 caracteres, sin espacios por
          delante ni por detrás ó intermedios
        </li>
        <li>nota del alumno: obligatorio, debe ser numérico, valores entre 0 y 10</li>
        <li>
          Presentar debajo de cada campo los carteles descriptivos en caso de
          error de validación.
        </li>
      </ul>

      <p>
        La tabla representará el detalle de las notas de cada alumno ingresadas
        por el formulario. Cada fila de la tabla mostrará el alumno (nombre y
        apellido juntos) y su nota obtenida.
      </p>

      <ul>
        <li>ROJO: Nota es de 0 a 3</li>
        <li>AMARILLO: Nota es de 4 a 6</li>
        <li>VERDE: Nota es de 7 a 10</li>
      </ul>

      <p>
        Agregar una fila adicional en la tabla, al final, que mostrará el
        promedio total de las notas de ese exámen. Dicha fila definirá el color
        de letra según el promedio total obtenido de acuerdo al código de
        colores citado anteriormente.
      </p>

      <p class="negrita">
        El cálculo del promedio se hará automáticamente al momento del ingreso
        de las notas.
      </p>

      <p class="negrita">
        Los resultados del múltiple choice se almacenarán en un array de
        objetos, donde cada pregunta y respuesta será un objeto con este
        formato: preguntas : [ <br />
        { numero: 1, respuestas: [‘a’,’c’] }, <br />
        { numero: 2, respuestas: [‘d’] }, <br />
        …. <br />
        ]<br />
      </p>

      <p>
        Subir el proyecto a github y enviar el link a
        danielsanchez68@hotmail.com
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-home",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.negrita {
  font-weight: bold;
}
</style>
