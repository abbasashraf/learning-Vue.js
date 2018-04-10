import Vue from 'vue'
import App from './App.vue'
import GSignInButton from 'vue-google-signin-button'
import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)
Vue.use(GSignInButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
