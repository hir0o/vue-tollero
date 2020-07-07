<template>
  <form action="#" :class="[active ? 'active' : '']" class="list-create">
    <input
      type="text"
      class="list-create__input"
      v-model="listTitle"
      :placeholder="placeholder"
      @focusin="focusIn"
      @focusout="focusOut"
    />
    <button type="submit" class="list-create__button" v-if="active">リストを追加</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      listTitle: "",
      placeholder: "新しいリストを追加",
      active: false
    };
  },
  methods: {
    focusIn() {
      this.active = true;
      this.placeholder = "リストのタイトルを入力...";
    },
    focusOut() {
      this.active = false;
      this.placeholder = "新しいリストを追加";
    }
  }
};
</script>

<style lang="scss" scoped>
.list-create {
  $this: &;
  margin-left: 2rem;
  width: 16rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  &__input {
    border-radius: 0.5rem;
    width: 15rem;
    backdrop-filter: blur(10px);
    background-color: rgba(#1876d0, 0.5);
    border: none;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    outline: none;
    &::placeholder {
      color: #043979;
    }
  }
  &__button {
    border: none;
    background-color: #59ac44;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    color: #fff;
  }
  &.active {
    background-color: #ebecf0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    #{$this}__input {
      color: #333;
      background-color: #fff;
      &::placeholder {
        color: #5e6d83;
      }
    }
  }
}
</style>
