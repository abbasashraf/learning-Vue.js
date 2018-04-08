import Vue from 'vue';
import App from './components/App.vue'
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

import { firebaseApp } from './firebase'
import store from './store/index'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/Dashboard', component: Dashboard },
        { path: '/Signin', component: Signin },
        {path:'/signup', component:Signup}
    ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if (user){
        store.dispatch('signIn', user)
        router.push('./Dashboard')
    }
    else{

        router.replace('./Signin') 
        
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})