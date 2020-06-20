// Uncomment the import below if you don't have vue installed in your website.
// import Vue from 'vue'
import App from '../App.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#vue-instance',
  name: 'vue-instance',
  render: h => h(App),
});