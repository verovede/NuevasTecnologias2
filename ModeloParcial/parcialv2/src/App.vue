<template>
  <div id="app">
    <div class="p-3">
      <h2>Primer Parcial NT2</h2>
      <h3>Verónica Ferrari</h3>
    </div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "./componentes/NavBAr.vue"

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: white;
}
</style>
