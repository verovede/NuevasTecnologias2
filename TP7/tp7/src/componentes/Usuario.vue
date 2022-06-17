<template>
  <section class="src-componentes-usuario">
    <h1 class="mt-5">Listado de Usuarios</h1>

    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre:</th>
          <th class="text-center">Edad</th>
          <th>Correo Electronico</th>
          <th class="text-center">Borrar Usuario</th>
        </tr>

        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>
            {{ usuario.name }}
          </td>
          <td class="text-center">
            {{ usuario.edad }}
          </td>
          <td>
            {{ usuario.email }}
          </td>
          <td class="text-center">
            <button
              class="btn btn-danger"
              @click="deleteUsuario(usuario.id)"
            >
              Borrar
            </button>
          </td>
        </tr>
      </table>
    </div>
    <h4 v-else class="alert alert-danger text-center">
      No se encontraron usuarios
    </h4>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-usuario',
    props: [],
    mounted () {
      //llamo al get para que me liste los usuarios
      this.getUsuarios()

    },
    data () {
      return {
        url: 'https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/',
        usuarios: []

      }
    },
    methods: {

      /* GET USUARIOS */
 
      async getUsuarios() {
        try {
          let { data: usuarios } = await this.axios(this.url)          
          this.usuarios = usuarios
        }
        catch(error) {
          console.error('Error en getUsuarios()', error.message)
        }
      },

       /* DELETE USUARIOS */
      async deleteUsuario(id) {
        
        try {
          let { data: usuario } = await this.axios.delete(this.url+id)                   
          let index = this.usuarios.findIndex(user => user.id == usuario.id)
          if(index == -1) throw new Error('usuario no encontrado')
          this.usuarios.splice(index, 1)
        }
        catch(error) {
          console.error('Error en deleteUsuario()', error.message)
        }
      }, 

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
