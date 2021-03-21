import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import vueToastr from 'vue-toastr'

import 'normalize.css';
import './assets/css/styles.scss'
Vue.config.productionTip = false
Vue.use(vueToastr)

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    this.$toastr.defaultPosition = "toast-bottom-right";
  }
}).$mount('#app')
