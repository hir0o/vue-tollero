import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [{
      "title": "リスト１",
      "cards": ["カード１", "カード２", "カード３"]
    }, {
      "title": "リスト２",
      "cards": ["カード４"]
    }, {
      "title": "リスト３",
      "cards": []
    }]
  },
  mutations: {
    addList(state, title) {
      state.lists.push({
        title: title,
        cards: []
      })
    },
    addCard(state, payload) {
      state.lists[payload.listIndex].cards.push(
        payload.title
      )
    },
    removeList(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    removeCard(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
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
    },
    removeList({
      commit
    }, payload) {
      commit('removeList', payload)
    },
    removeCard({
      commit
    }, payload) {
      commit('removeCard', payload)
    },
    updateList({
      commit
    }, payload) {
      commit('updateList', payload)
    }
  },
  modules: {}
})
