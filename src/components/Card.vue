<template>
  <div class="card">
    <p class="card__body">{{ title }}</p>
    <button class="card__delete" @click="removeCard">×</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCard() {
      console.log(this.cardIndex);

      if (confirm("カードを削除しますか？")) {
        this.$store.dispatch("removeCard", {
          listIndex: this.listIndex,
          cardIndex: this.cardIndex
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  &:not(:first-child) {
    margin-top: 1rem;
  }
  &__body {
    background-color: #fff;
    border: 1px solid;
    border-color: #aab4c4;
    font-weight: bold;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }
  &__delete {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: #fff;
    border-radius: 50%;
    color: red;
    width: 1rem;
    height: 1rem;
  }
}
</style>
