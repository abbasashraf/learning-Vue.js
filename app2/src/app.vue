
<template>
  <div id="app">
      <h3>{{title}}</h3>
      <div class="col-md-12">
        <Character v-for="(id, index) in initial_ids"  :id="1" key="index"
      />
      </div>
      
  </div>
</template>


<script>
import Vue from "vue";
import Character from "./component/Character.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Generate your Team",
      initial_ids: [1, 13, 14]
    };
  },
  components: {
    Character
  },
  methods: {}
};
</script>
