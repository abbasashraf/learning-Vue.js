import Vue from 'vue';
import App from './components/App.vue'
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import PageNotFound from './components/pgenotfound.vue'

import { firebaseApp } from './firebase'
import store from './store/index'
Vue.use(VueRouter)


// function load (component) {
//     return () => import(`@/${component}.vue`)
//   }

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/Dashboard', component: Dashboard, meta: { requireAuth: true } },
        { path: '/Signin', component: Signin, meta: { requireNotAuth: true } },
        { path: '/signup', component: Signup, meta: { requireNotAuth: true } },
        { path: '*', component: PageNotFound }, // Not found,

        // { path: '/all-donor', component: load('alldonor'), meta: { requireAuth: true } },
        // { path: '*', component: load('Error404') } // Not found
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log(to, "to")
//     console.log(to.meta, "to.meta")
//     console.log(to.matched, "to.match")
    
//     // if (to.meta.requireAuth) {
//     //     next({ path: '/' })

//     //     //   console.log(store.getters, "store.getters")
//     //     //   if (!localStorage.getItem('user')) {
//     //     //     next({ path: '/' })
//     //     //   }
//     // }
//     // else if (to.meta.requireNotAuth) {
//     //     next({ path: '/Signin' })
      
        

//     //     //   console.log(store.getters)
//     //     //   if (localStorage.getItem('user')) {
//     //     //     next({ path: '/' })
//     //     //   }

//     // }
//     // next()
// })

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch('signIn', user)
        router.push('./Dashboard')
    }
    else {

        router.replace('./Signin')

    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

console.log(window.location.pathname, "pathname")
console.log(router, "router")
