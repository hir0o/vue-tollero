<template>
  <div class="bord">
    <h2 class="bord__ttl">カード一覧</h2>
    <div class="bord__wrap">
      <div class="bord__cards">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
.bord {
  padding-top: 2rem;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
  &__wrap {
    overflow-x: scroll;
    height: calc(100vh - 11rem);
    padding: 0 2rem;
    margin-top: 2rem;
  }
  &__cards {
    display: inline-flex;
  }
  &__ttl {
    margin-left: 2rem;
    color: #ffffff;
  }
}
</style>
