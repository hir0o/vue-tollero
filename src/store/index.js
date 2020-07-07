import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addList(state, title) {
      state.lists.push({
        title: title,
        cards: []
      })
    },
    addCard(state, payload) {
      console.log(payload);

      state.lists[payload.listIndex].cards.push(
        payload.title
      )
    }
  },
  actions: {
    addList({
      commit
    }, title) {
      commit('addList', title)
    },
    addCard({
      commit
    }, payload) {
      commit('addCard', payload)
    }
  },
  modules: {}
})
