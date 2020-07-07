<template>
  <header class="header">
    <h1 class="header__ttl">タスク管理アプリ</h1>
    <div class="header__menu">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/about" class="header__link">About</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background-color: #1876d1;
  padding: 1rem 3rem;
  z-index: 999;
  display: flex;
  align-items: center;
  &__ttl {
    color: #fff;
  }
  &__menu {
    margin-left: auto;
  }
  &__link {
    color: #fff;
    text-decoration: none;
    &:not(:first-child) {
      margin-left: 2rem;
    }
    &:hover {
      color: #bbb;
    }
  }
}
</style>
