import {EventBus} from './main';
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://vueserver-80315.firebaseio.com/data.json",
    timeout: 10000,
    params: {} // do not remove this, its added to add params later in the config
});

instance.interceptors.request.use(function (config) {
    console.log('HOLA');
    EventBus.$emit('toggle-loader', true);
    return config

}, function (error) {
    EventBus.$emit('toggle-loader', false);
    return Promise.reject(error);
})

instance.interceptors.response.use(function (response){
    
    EventBus.$emit('toggle-loader', false);
    console.log(response);
    console.log('Tchau');
    return response;

}, function(error){
    EventBus.$emit('toggle-loader', false);
    return Promise.reject(error);
})

export default instance
