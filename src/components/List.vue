<template>
  <div class="list">
    <div class="list__header">
      <h3 class="list__ttl">リストタイトル</h3>
      <button class="list__delete">×</button>
    </div>
    <div class="list__content">
      <Card />
      <Card />
      <Card />
      <CardCreate />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardCreate from "@/components/CardCreate";

export default {
  components: {
    Card,
    CardCreate
  }
};
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  border: 1px solid;
  border-color: #aab4c4;
  background-color: #ebecf0;
  width: 24rem;
  padding: 1rem;
  border-radius: 0.5rem;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &__ttl {
    font-size: 1.5rem;
  }
  &__delete {
    position: absolute;
    right: 10px;
    top: 16px;
    border: none;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    width: 1rem;
    height: 1rem;
  }
  &__content {
    margin-top: 2rem;
  }
}
</style>
