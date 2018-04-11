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
        <p>{{error.message}}</p>
            <br>
            
            <button class="btn-primary btn" @click='signIn'>Sign In</button>
        </div>
        <br>
        <br>
        <button class="btn-primary btn" @click='passReset'>Reset password</button>
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
    },
    passReset() {
      console.log("passreset funtion call");
      firebaseApp
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          console.log("password reset send");
        })
        .catch(error => {
          var codeerror = error.code;
          var errorMsg = error.message;
          if (codeerror == "auth/invalid-email") {
            alert(errorMsg);
          } else if (codeerror == "auth/user-not-found") {
            alert(errorMsg);
          }
          console.log(error);
        });
    }
  }
};
</script>

