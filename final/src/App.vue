<template>
  <div id="app">
    
    <Ejercicio />
  </div>
</template>

<script>
import Ejercicio from './componentes/Ejercicio.vue'

export default {
  name: 'App',
  components: {
    Ejercicio
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
