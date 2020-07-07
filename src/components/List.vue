<template>
  <div class="list">
    <div class="list__header">
      <h3 class="list__ttl">{{ list.title }}</h3>
      <button class="list__delete" @click="removeList">×</button>
    </div>
    <div class="list__content">
      <Card v-for="card in list.cards" :key="card.id" :title="card" />
      <CardCreate :listIndex="listIndex" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardCreate from "@/components/CardCreate";

export default {
  props: {
    list: {
      type: Object,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  components: {
    Card,
    CardCreate
  },
  methods: {
    removeList() {
      if (confirm("リストを削除しますか？")) {
        this.$store.dispatch("removeList", {
          listIndex: this.listIndex
        });
      }
    }
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
