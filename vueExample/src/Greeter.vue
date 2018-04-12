<template>
  <div>
      <h1>hello {{name}}</h1>
  <button @click="alertName()">alert</button>  
      
  </div>

</template>


<script>
export default {
  //   props: ["name"],
  props: {
    name: {
      type: [String],
      required: true,
      default: '',
      validator: value => value.length > 10,
    }
  },
  methods: {
    alertName() {
      this.$emit("alertNameeeeeee", this.name);
    }
  }
};
</script>
