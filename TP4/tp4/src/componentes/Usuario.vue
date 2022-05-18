<template>
  <section class="src-componentes-usuario">
    <h1 class="mt-5">Listado de Usuarios</h1>

    <button class="btn btn-info my-3 mr-3" @click="getUsuariosXMLHttpRequest()">
      Listar Usuarios XMLHttpRequest
    </button>

    <button class="btn btn-info my-3 mr-3" @click="getUsuariosFetch()">
      Listar Usuarios Fetch
    </button>

    <button class="btn btn-info my-3 mr-3" @click="getUsuariosAxios()">
      Listar Usuarios Axios
    </button>

    <button class="btn btn-info my-3 mr-3" @click="limpiarLista()">
      Limpiar Tabla
    </button>

    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre:</th>
          <th>Edad</th>
          <th>Correo Electronico</th>
        </tr>

        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>
            {{ usuario.name }}
          </td>
          <td>
            {{ usuario.edad }}
          </td>
          <td>
            {{ usuario.email }}
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

    },
    data () {
      return {
        url: 'https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/',
        usuarios: []

      }
    },
    methods: {

      limpiarLista() {
        this.usuarios = []
      },

      /*XMLHttpRequest*/      
      getUsuariosXMLHttpRequest() {
        const xhRequest = new XMLHttpRequest();
        xhRequest.open("get", this.url);

      xhRequest.addEventListener("load", () => {
        if (xhRequest.status == 200) {
          let respuesta = JSON.parse(xhRequest.response);
          
          this.usuarios = respuesta;
        } else {
          console.error("ERROR xhRequest cb (status)", xhRequest.status);
        }
      });

      xhRequest.addEventListener("error", (e) => {
        console.error("ERROR xhRequest cb (ajax)", e);
      });

      xhRequest.send();
    },

      /*Fetch*/
      getUsuariosFetch(){
        fetch(this.url)
          .then((response) => response.json())
          .then((respuesta) => {
            this.usuarios = respuesta;
          })
          .catch((error) => console.log("Error", error));
      },

      /*AXIOS*/
      async getUsuariosAxios() {
      try {
        let { data } = await this.axios(this.url);
        this.usuarios = data;
      } catch (error) {
        console.log("Error Axios", error);
      }
    },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
