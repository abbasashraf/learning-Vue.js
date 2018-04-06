<template>
    <div class="col-md-4" @click="switchCharacter">  
        <div class="character-card">
          <div class="card-block">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}</p>
            <p class="card-text">Mass: {{character.mass}}</p>
            <p class="card-text">Hair Color: {{character.hair_color}}</p>
            <p class="card-text">Eye Color: {{character.eye_color}}</p>
            
          </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);

export default {
  props: ["id"],
  data() {
    return {
      character: {}
    };
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}`, {
        method: "GET"
      })
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(json => {
          this.character = json;
          //   console.log(json);
        });
      //   this.axios.get("http://swapi.co/api/people").then(response => {
      //     console.log(response);
      //   });
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 70) + 1;
      this.fetchCharacter(random_id);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
};
</script>
