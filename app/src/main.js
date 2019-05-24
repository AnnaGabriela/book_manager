import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import StarRating from 'vue-star-rating';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
});

Vue.prototype.$http = axiosInstance;

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('star-rating', StarRating);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
