<template>
    <div class="col-md-12">
            <Items
            v-for="(item, index) in items"
            key="index"
            v-bind:passedItems="item"
            :type="type"
            />
    </div>
</template>
<script>
import Items from "./Items.vue";
export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: "fetchItems"
  },
  methods: {
    fetchItems() {
      this.type = this.$route.params.type;
      this.items = [];
      let initial_ids = [1, 3, 5];

      for (let i in initial_ids) {
        let id = initial_ids[i];
        // console.log("id", id);
        console.log("this.type", this.type);
        const url = `http://swapi.co/api/${this.type}/${id}`;
        console.log(url);
        fetch(url, {
          method: "GET"
        })
          .then(response => response.json())
          .then(json => this.items.push(json));
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components : {
      Items
  }
};
</script>
