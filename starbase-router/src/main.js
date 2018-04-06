import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import Data from './component/Data.vue';

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