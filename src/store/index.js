import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router'

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
    }],
    loginUser: null
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
    removeCard(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    },
    setLoginUser(state, user) {
      state.loginUser = user
    }
  },
  actions: {
    addList({commit}, title) {
      commit('addList', title)
    },
    addCard({commit}, payload) {
      commit('addCard', payload)
    },
    removeList({commit}, payload) {
      commit('removeList', payload)
    },
    removeCard({commit}, payload) {
      commit('removeCard', payload)
    },
    updateList({commit}, payload) {
      commit('updateList', payload)
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(()=> {
        router.push('/')
      });
    },
    logout() {
      firebase.auth().signOut()
    },
    setLoginUser({commit}, user) {
      commit('setLoginUser', user)
    }
  },
  modules: {}
})
