import Vue from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import Styles from './assets/styles/app.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
