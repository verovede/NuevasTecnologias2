<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link link to="/"
              ><a class="nav-link" href="#">Home</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link link to="/ejercicio">
             <a class="nav-link" href="#">Mostrar Resultados</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-componentes-nav-b-ar",
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
</style>
