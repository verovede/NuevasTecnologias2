<template>
  <section>
    <div class="jumbotron">
      <h1 class="text-left">Ingreso de Notas Alumnos</h1>
      <div>
        <vue-form :state="formState" @submit.prevent="enviar()">
          <!-- CAMPO NOMBRE -->
          <validate tag="div">
            <label for="nombre">Nombre Alumno</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nombre"
              :minlength="minCaracteres"
              :maxlength="maxCaracteres"
              required
              no-espacios
            />

            <!-- MENSAJES DE VALIDACION -->
            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo Requerido
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                El nombre tiene que tener entre {{ minCaracteres }} y
                {{ maxCaracteres }} caracteres
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                No se permiten espacios intermedios
              </div>
            </field-messages>
          </validate>
          <!-- FIN NOMBRE -->

          <!-- CAMPO APELLIDO -->
          <validate tag="div">
            <label for="apellido">Apellido Alumno</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.apellido"
              :minlength="minCaracteres"
              :maxlength="maxCaracteres"
              required
              no-espacios
            />

            <!-- MENSAJES DE VALIDACION -->
            <field-messages name="apellido" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo Requerido
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                El apellido tiene que tener entre {{ minCaracteres }} y
                {{ maxCaracteres }} caracteres
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                No se permiten espacios intermedios
              </div>
            </field-messages>
          </validate>
          <!-- FIN APELLIDO -->

          <!-- CAMPO NOTA -->
          <validate tag="div">
            <label for="nota">Nota Parcial</label>
            <input
              type="number"
              id="nota"
              name="nota"
              class="form-control"
              autocomplete="off"
              v-model.number="formData.nota"
              required
              :min="notaMin"
              :max="notaMax"
            />

            <!-- MENSAJES TOTAL A PAGAR -->
            <field-messages name="nota" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo Requerido
              </div>
              <div slot="min" class="alert alert-danger mt-1">
                La nota tiene que ser entre {{ notaMin }} y {{ notaMax }}
              </div>
              <div slot="max" class="alert alert-danger mt-1">
                La nota tiene que ser entre {{ notaMin }} y {{ notaMax }}
              </div>
            </field-messages>
          </validate>
          <!-- FIN NOTA -->

          <!-- ENVIO -->
          <button class="btn btn-info my-3" :disabled="formState.$invalid">
            Enviar
          </button>
        </vue-form>

        <!--  <pre>{{ formData }}</pre> -->
      </div>

      <div v-if="alumnos.length" class="table-responsive">
        <h1 class="text-left">Registro de Notas de Alumnos</h1>
        <table class="table">
          <tr>
            <th>Alumno</th>
            <th>Nota</th>
          </tr>

          <tr v-for="(alumno, index) in alumnos" :key="index">
            <td>{{ alumno.nombre }} {{ alumno.apellido }}</td>
            <td :style="{ color: colorPorNota(alumno.nota) }">
              {{ alumno.nota }}
            </td>
          </tr>
          <tr>
            <td>Promedio de las notas de todos los alumnos: </td>
            <td :style="{ color: colorPorNota(calcularPromedio()) }">{{ calcularPromedio() }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-formulario-av",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInicialData(),
      alumnos: [],
      minCaracteres: 3,
      maxCaracteres: 15,
      notaMin: 0,
      notaMax: 10,
      promedio: 0,
      notaTotal: 0,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        nota: "",
      };
    },
    enviar() {
      console.log({ ...this.formData });
      let alumno = { ...this.formData };

      console.log(alumno);

      //GUARDO LA INFO
      this.alumnos.push(alumno);

      //PONGO EN BLANCO
      this.formData = this.getInicialData();

      //RESETEO EL FORM
      this.formState._reset();
    },

    colorPorNota(nota) {
      let color;

      if (nota < 4) {
        color = "red";
      }
      if (nota >= 4 && nota < 7) {
        color = "yellow";
      }
      if (nota >= 7) {
        color = "green";
      }
      return color;
    },

    calcularPromedio() {
      let notaTotal = 0;

      this.alumnos.forEach((alumno) => {
        notaTotal = notaTotal + alumno.nota;
      });

      this.promedio = notaTotal / this.alumnos.length;

      
      return this.promedio.toFixed(2);
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: darkmagenta;
  color: black;
}
label {
  color: #fff;
  text-align: left;
  margin-top: 30px;
}

.table {
  background: white;
}

td,
th {
  text-align: left;
}
</style>
