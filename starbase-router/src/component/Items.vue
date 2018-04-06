<template>
  <div class="col-md-4" @click='switchItem'>
      <div class="item-card">
          <div class="card-block">
              <h4 class="card-title">{{items.name}}</h4>
              <div v-for="(value , key,index,) in items">
                  <div v-if="index < 5">
                      <strong>{{key}}</strong>: {{value}}
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["passedItems", "type"],
  data(){
      return {
          items:{}
      }
  },
  methods: {
    switchItem() {
      let randomNumm = Math.floor(Math.random() * 45) + 1;
      const url = `http://swapi.co/api/${this.type}/${randomNumm}`;
      fetch(url, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.items = json));
    }
  },
  created(){
      this.items = this.passedItems
  }
};
</script>

