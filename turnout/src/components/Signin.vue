<template>
    <div class="form-inline">
        <div class="form-group">
            <input type="text"
            placeholder="email"
            class="form-control"
            v-model="email">
            <br>
            <br>
              <input type="password"
            placeholder="password"
            class="form-control"
            v-model="password">
            <br>
            <br>
            
            <button class="btn-primary btn" @click='signIn'>Sign In</button>
        </div>
        <br>
        <p>{{error.message}}</p>
        <br>
        <router-link to="/signup">Not a user? Sign Up</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

