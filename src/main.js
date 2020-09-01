import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import './registerServiceWorker'
Vue.use(Vuesax)

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
