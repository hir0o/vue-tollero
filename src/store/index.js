import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addList(state, title) {
      console.log(title);
      state.lists.push({
        title
      })
    }
  },
  actions: {
    addList({
      commit
    }, title) {
      console.log("わあああああ");

      commit('addList', title)
    }
  },
  modules: {}
})
