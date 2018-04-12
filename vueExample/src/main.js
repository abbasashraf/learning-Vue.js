import Vue from 'vue'
import App from './App.vue'
import Greeter from './Greeter.vue'

Vue.component('app-greeter', Greeter)

new Vue({
  el: '#app',
  render: h => h(App)
})
