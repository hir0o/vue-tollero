<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
import Header from "@/components/Header";

export default {
  components: {
    Header
  },
  methods: {
    setLoginUser(user) {
      this.$store.dispatch("setLoginUser", user);
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
      }
    });
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
