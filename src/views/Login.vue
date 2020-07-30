<template>
  <div>
    <h1>Login</h1>
    <button @click="login">ログインする</button>
    <button @click="logout">ログアウトする</button>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      user: {}
    };
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      // ログイン状態ならuserが取得できる
      this.user = user ? user : {};
    });
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style>
</style>
