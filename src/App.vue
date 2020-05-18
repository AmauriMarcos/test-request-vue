<template>
   <div id='app'>
      <h1>Form</h1>
      <Formulario></Formulario>
   </div>
</template>

<script>
import Formulario from "./components/Formulario";

export default {
  name: "App",

  components: {
    Formulario
  },

  data(){
    return{

    }
  }
};
</script>

<style lang="scss">

  h1{
    text-align: center;
  }
  
  #app{
    padding: 3% 15%;
  }
</style>