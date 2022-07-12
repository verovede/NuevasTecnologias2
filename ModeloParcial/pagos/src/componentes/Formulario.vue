<template>
  <section class="container">
    <h1 class="mt-5">Formulario de Ingreso de Pagos</h1>
    <vue-form :state="formState" @submit.prevent="enviar()">
      <!-- CAMPO NOMBRE ALUMNO  -->
      <validate tag="div">
        <input
          placeholder="Nombre"
          v-model.trim="formData.nombre"
          id="nombre"
          name="nombre"
          type="text"
          class="form-control mt-3"
          autocomplete="off"
          required
        />

        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
        </field-messages>
      </validate>
      <!-- FIN CAMPO NOMBRE  -->

       <!-- CAMPO NOMBRE ALUMNO  -->
      <validate tag="div">
        <input
          placeholder="Apellido"
          v-model.trim="formData.apellido"
          id="apellido"
          name="apellido"
          type="text"
          class="form-control mt-3"
          autocomplete="off"
          required
        />

        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
        </field-messages>
      </validate>
      <!-- FIN CAMPO APELLIDO  -->

      <!-- CAMPO NOTA  -->
      <validate tag="div">
        <input
          placeholder="Nota"
          v-model.trim="formData.nota"
          id="nota"
          name="nota"
          type="number"
          class="form-control mt-3"
          autocomplete="off"
          required
        />

        <field-messages name="nota" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
        </field-messages>
      </validate>
      <!-- FIN CAMPO NOTA -->

      <!-- ENVIO -->
      <button class="btn btn-info my-3" :disabled="formState.$invalid">
        Enviar
      </button>
    </vue-form>

    <div class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Alumno</th>
          <th>Nota</th>
        </tr>

        <tr
          v-for="(alumno, index) in alumnos"
          :key="index"
          :style="{ color: calcularSaldo(pago).color }"
        >
          <td>{{ alumno.nombre }} {{ alumno.apellido }}</td>

          <td>
            {{ alumno.nota }}
          </td>
        </tr>
        <tr>
          <td>
           Promedio
          </td>
          <td>
            {{ calcularSaldo(pago).valor }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState :{},
        formData : this.getInicialData(),           
        alumnos: [  ],
        promedio: 0

      }
    },
    methods: {
      enviar(){               
        const alumno = {  nombre: this.formData.nombre, 
                        apellido: this.formData.apellido, 
                        nota: this.formData.nota, 
                       }     
        this.alumnos.push(alumno)
        this.formData = this.getInicialData()
        this.formState._reset()
        },

      getInicialData(){
        return {
          nombre: '',         
          apellido:'',
          nota: '',
         }

      },
      calcularSaldo(pago){

        let diferencia = pago.pagoEfectuado - pago.aPagar
        let color = '#33FF8D'


        if (diferencia < 0  ){color = '#FF3368'}
        if (diferencia > 0  ){color = '#3349FF'}

        return {
            valor : diferencia,
            color
        }

      }

     

    },

    
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
