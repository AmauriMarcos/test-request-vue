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
     
      <div class="box-info">
         <v-btn small color="success" class='myButton' @click='getData()'>Get data</v-btn>
        <v-card
          class="mx-auto"
          tile
          v-for='dados in info' :key='dados'
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{dados.name}}</v-list-item-title>
              <v-list-item-subtitle>{{dados.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
 
      </v-card>
      </div>
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
    },
     async getData(){
      let res = await  axios.get("https://vueserver-80315.firebaseio.com/data.json")
       for(let key in res.data){
         this.info.push(res.data[key]);
       }
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
  .box-info{
    margin-top: 2rem;
    width: 100%;
  }
  .v-application--wrap{
    min-height: 0 !important;
  }

  .myButton{
    color: white !important;
    margin-bottom: 1.5rem;
  }
  
</style>
