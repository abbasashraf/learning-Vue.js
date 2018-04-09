import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
const state = {
    products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 40 },
        { name: "Green Shells", price: 60 },
        { name: "Red Shells", price: 80 }
    ]
}

const getters = {
    saleProducts: (state) => {
        console.log(state, "state")
        var saleProducts = state.products.map(product => {
            return {
                name: '--' + product.name + '--',
                price: product.price / 2
            }
        })
        return saleProducts

    }
}

const mutations = {
    reducePrice: (state,payload) => {
        state.products.forEach(product => {
            product.price -= payload
        })
    }
}


const actions = {
    reducePrice: (context, params) => {
        console.log(context, "context")
        setTimeout(() => {
            context.commit('reducePrice', params)
        }, 2000)
    }
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})