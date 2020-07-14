<template>
  <div>
    <h1>Login</h1>
    <button @click="login">ログインする</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
    }
  }
};
</script>

<style>
</style>
