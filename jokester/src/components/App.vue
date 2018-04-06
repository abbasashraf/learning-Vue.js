<template>
  <div id='app'>
      <h3>Got Jokes</h3>
    <button class="btn-promary btn" @click='initJokes'>Add Ten Jokes</button>
    <button class="btn-promary btn" @click='addJoke'>Add a Jokes</button>
   
    <br>

    <span v-for="type in types">
        <input type="checkbox" :value="type" v-model="chekedTypes"  checked>
        <label for="">{{type}} &nbsp; </label>
    </span>
    <br>
    <div class="col-md-12">
         <Joke 
         v-for="(joke, index) in $store.state.jokes"
         v-show="chekedTypes.includes(joke.type)"
         :joke="joke"
         :index="index"
         key="index"
         />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  data() {
    return {
      types: ["general", "knock knock", "programming"],
      chekedTypes: ["general", "knock knock", "programming"]
    };
  },
  methods: mapActions(["initJokes", "addJoke"]),
  components: {
    Joke
  }
};
</script>

