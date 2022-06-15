<template>
  <div id="app">
    
    <Header     :pickedColor="pickedColor"       
                :estadoJuego="estadoJuego"          
            
                />

    <Navigator  @pickedColor="pickedColor=$event"               
                @colors="colors=$event"
                @resetEstado="resetEstado=$event"
                :mensaje="mensaje"
                :estadoJuego="estadoJuego"
                :resetEstadodelhijo="resetEstadodelhijo"
                />

    <Container  :colors="colors"
                :pickedColor="pickedColor"
                :resetEstado="resetEstado"
                @mensaje="mensaje=$event"    
                @estadoJuego="estadoJuego=$event"    
                @resetEstadodelhijo="resetEstadodelhijo=$event"          
                />

 
  </div>
</template>

<script>
import Header from './componentes/Header.vue'
import Navigator from './componentes/Navigator.vue'
import Container from './componentes/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container,

  },
  data() {
    return {   

      pickedColor: "pickedColor",
      colorCount: "colorCount",
      colors: "colors",
      resetEstado:"resetEstado",
      mensaje: "",
      estadoJuego: "",
      resetEstadodelhijo: "resetEstadodelhijo"
   

    };
  },
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
body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";}
</style>
