import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import Data from './component/Data.vue';


// dont need to import all the compenents
// function load (component) {
//     return () => import(`@/${component}.vue`)
//   }

//   export default new VueRouter({
//     mode: 'history',
//     routes: [
//       { path: '/', component: load('Hello') },
//       { path: '*', component: load('Error404') } // Not found
//     ]
//   })

const Routes = [
    { path: '/data/:type', component: Data }
]

const Router = new VueRouter({
    routes: Routes
})

new Vue({
    el: '#app',
    router: Router,
    render: h => h(App)
})