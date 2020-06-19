import App from '../App.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#vue-instance',
  name: 'vue-instance',
  render: h => h(App),
});