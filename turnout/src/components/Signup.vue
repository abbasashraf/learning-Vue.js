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
            <button class="btn-primary btn" @click='signUp'>Sign Up</button>
        </div>
        <br>
        <p>{{error.message}}</p>
            <br>
        <router-link to="/signin"> Already a user? Sign In</router-link>
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
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
