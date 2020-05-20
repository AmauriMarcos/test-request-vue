import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

/* Vue.config.productionTip = false; */
/* const EventBus = new Vue();
export default EventBus; */

axios.defaults.baseURL = "https://vueserver-80315.firebaseio.com";
axios.defaults.headers.common["Authorization"] = 'pepino';
axios.defaults.headers.get['Accepts'] = 'application/json';
/* 
const reqInterceptor =  */axios.interceptors.request.use(config =>{
   console.log('Request Interceptor', config);
   document.body.classList.add('loading-indicator');
   return config
}, function(error){
  
   return Promise.reject(error);
});

/* const resInterceptor = */ axios.interceptors.response.use(response =>{
  console.log("Response Interceptor", response);
  document.body.classList.remove('loading-indicator');
  return response
}, function(error){
  
  return Promise.reject(error);
})

/* axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor); */




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");


