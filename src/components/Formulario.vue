<template>
  <div >
    <v-app>
      <v-form class="box">
         <v-text-field
            label="Name"
            outlined
            dense
            v-model='user.name'
         >
         </v-text-field>
         <v-text-field
            label="Email"
            outlined
            dense
            v-model='user.email'
         >
         </v-text-field>
         <v-btn small color="deep-purple accent-4" class='myButton' @click='submit()'>Submit</v-btn>
      </v-form>
      <p></p>
    </v-app>
  
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Formulario",
  data() {
    return {
      user: {
        name: '',
        email: ''
      },
      info: []
    }
  },
  methods:{
      submit(){
        axios.post("https://vueserver-80315.firebaseio.com/data.json", this.user)
        .then(response => {
           console.log(response);
        }).catch(error =>{
           console.log(error);
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .box{
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 1.5rem;
   
  }
  .v-application--wrap{
    min-height: 0 !important;
  }

  .myButton{
    color: white !important;
  }
</style>
