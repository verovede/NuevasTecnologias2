<template>
  <section>
    <h1 class="mt-5">Formulario de Ingreso de Usuarios</h1>

    <vue-form :state="formState" @submit.prevent="enviar()">
      <!-- CAMPO NOMBRE  -->
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
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
        />

        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">Campo obligatorio</div>
          <div class="alert alert-danger mt-1" slot="minlength">
            El nombre debe tener entre {{ nombreMinLength }} y {{ nombreMaxLength }} caracteres.
          </div>         
        </field-messages>
      </validate>
      <!-- FIN CAMPO NOMBRE  -->

      <!-- CAMPO EDAD  -->
      <validate tag="div">
       <input
          placeholder="Edad"
          v-model.trim="formData.edad"
          id="edad"
          name="edad"
          type="number"
          class="form-control mt-3"
          autocomplete="off"
          required
          :min="edadMin"
          :max="edadMax"
        />

        <field-messages name="edad" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">Campo obligatorio</div>
          <div class="alert alert-danger mt-1" slot="min">
            La edad debe ser entre {{ edadMin }} y {{ edadMax }} años.
          </div>         
        </field-messages>
      </validate>
      <!-- FIN CAMPO EDAD  -->

      <!-- CAMPO CORREO  -->
      <validate tag="div">
        <input
          placeholder="Correo Eléctronico"
          v-model.trim="formData.email"
          id="email"
          name="email"
          type="email"
          class="form-control mt-3"
          autocomplete="off"
          required
          
        />

        <field-messages name="email" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">Campo obligatorio</div>
          <div class="alert alert-danger mt-1" slot="email" >
            El correo ingresado es inválido.
          </div>         
        </field-messages>
      </validate>
      <!-- FIN CAMPO CORREO  -->

      <!-- ENVIO -->
      <button class="btn btn-info my-3" :disabled="formState.$invalid">
        Enviar
      </button>
    </vue-form>

    <div class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre:</th>
          <th>Edad</th>
          <th>Correo Electronico</th>
        </tr>
        
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>
            {{ usuario.nombre }}
          </td>
          <td>
            {{ usuario.edad }}
          </td>
          <td>
            {{ usuario.email }}
          </td>
          <td>
            <button class="btn btn-danger ml-3" @click="borrarUsuario(index)">
              Borrar Usuario
            </button>
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
        nombreMinLength : 5,
        nombreMaxLength : 15,
        edadMin : 18,
        edadMax : 120,       
        usuarios: [  ],
       
        
       }
    },
    methods: {
      enviar(){
        console.log({...this.formData})        
        const usuario = { nombre: this.formData.nombre, edad: this.formData.edad, email: this.formData.email }     
        this.usuarios.push(usuario)
        this.formData = this.getInicialData()
        this.formState._reset()
        },

      getInicialData(){
        return {
          nombre: '',         
          edad:'',
          email: ''}

      },

      borrarUsuario(index) { 
        this.usuarios.splice(index, 1)
        }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
