<template>
  <div id="app">
      <google/>
      <br>
      <facebook/>
  </div>
</template>

<script>
import google from "./components/google.vue";
import facebook from "./components/facebook.vue";

export default {
  name: "app",
  components: {
    google,
    facebook
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
