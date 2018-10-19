import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './../node_modules/bulma/css/bulma.css';
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(VueApexCharts);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
