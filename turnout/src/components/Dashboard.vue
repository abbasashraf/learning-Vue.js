<template>
  
  <div class="">
    <h3>Events Dashboard</h3>
     <button class=" btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
  <hr>
  <AddEvent/>
  <hr>
  <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="text" aria-label="Search" v-model="search" placeholder="Search by title">
  </form>
</nav>
  <hr>
    <div class="col-md-12 ">
       <EventItem
       v-for="(event_item, index) in filterdData"
       :event= "event_item"
        key="index"
       />
    </div>
  </div>
</template>


<script>
import { firebaseApp, eventsRef } from "../firebase";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      console.log(events, "events");
      this.$store.dispatch("setEvents", events.reverse());
    });
  },
  computed: {
    events: mapState("./../store/index.js", ["events"]),
    filterdData: function() {
      return this.$store.state.events.filter(element => {
        return element.title.match(this.search)
      });
    }
  }

  // {
  //   mapState(['events'])
  // }
};
</script>

