<template>
  <div id="app">
    <input type="text" v-model="name">
    <app-greeter @alertNameeeeeee="alertName($event)" :name='name'>
      
    </app-greeter>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "hello"
    };
  },
  methods: {
    alertName(name) {
      alert(name);
    }
  }
};
</script>











<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
