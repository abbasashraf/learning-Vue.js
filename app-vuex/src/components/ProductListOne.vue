<template>
  <div id="product-list-one">
      <h2 id="product-list-one ul">Product List One</h2>
      <ul id="product-list-one ul">
          <li v-for="product in saleProducts">
               <span class="name">{{product.name}}</span>
              <span class="price">{{product.price}}</span>
          </li>
      </ul>
              <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  //   props: ['products'],
  //   data(){
  //       return {

  //       }
  //   }

  computed: {
    products() {
      return this.$store.state.products;
    },
    // use mapGetter instead the function of saleProducts
    ...mapGetters(["saleProducts"]),
    // saleProducts() {
    //   return this.$store.getters.saleProducts;

    //   // var saleProducts = this.$store.state.products.map(product => {
    //   //   return {
    //   //     name: "--" + product.name + "--",
    //   //     price: product.price / 2
    //   //   };
    //   // });
    //   // return saleProducts;
    // }
  },
  methods: {
    // use mapAction intead of reducePrice function
    ...mapActions(["reducePrice"]),
    // reducePrice: function(params) {
    //   //   this.$store.state.products.forEach(product => {
    //   //     product.price -= 1;
    //   //   });

    //   this.$store.dispatch("reducePrice", params);
    // }
  }
};
</script>

<style scoped>
#product-list-one {
  background: rgb(66, 65, 54);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>