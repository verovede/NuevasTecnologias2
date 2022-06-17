<template>
  <section class="src-componentes-usuario">
    <h1 class="mt-5">Listado de Usuarios</h1>

    <div v-if="mostrarUsuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre:</th>
          <th class="text-center">Edad</th>
          <th>Correo Electronico</th>
          <th class="text-center">Borrar Usuario</th>
        </tr>

        <tr v-for="(usuario, index) in mostrarUsuarios" :key="index">
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
            <button class="btn btn-danger" @click="borrarUsuarios(usuario.id)">
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
     console.log("GET USUARIOS")
     this.$store.dispatch('getUsuarios')
    },
    data () {
      return {    

      }
    },
    methods: {

      borrarUsuarios(id) {
        console.log("DELETE USUARIOS")
        this.$store.dispatch('deleteUsuarios',id)
      },

    },
    computed: {
      mostrarUsuarios() {
        let usuarios = this.$store.state.usuarios
        return usuarios
      },

      
    }
    
}


</script>

<style scoped lang="css">
</style>
