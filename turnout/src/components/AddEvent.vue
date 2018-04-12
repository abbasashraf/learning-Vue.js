898
<template>
<div >
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="form animated zoomInDown" v-if="showForm">
        <div class="form-group fadeInLeft">
        <label for="">Title</label>
        <input type="text" v-model="event.title" class="form-control">
    </div>
       <div class="form-group">
        <label for="">Description</label>
        <input type="text" v-model="event.description" class="form-control">
    </div>
       <div class="form-group">
        <label for="">Date</label>
        <input type="date" v-model="event.date" class="form-control">
    </div>
        <div class="form-group">
        <label for="">Location</label>
        <input type="text" v-model="event.location" class="form-control">
    </div>
<button class="btn-primary btn-sm" @click="addEvent">Submit</button>  
</div>
</div>
</template>

<script>
import { eventsRef } from "../firebase";
export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
};
</script>
