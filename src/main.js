import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyB_Xb__kVEp096k7CgTSMH5BIsY7-Tv6Jo",
  authDomain: "vue-tollero.firebaseapp.com",
  databaseURL: "https://vue-tollero.firebaseio.com",
  projectId: "vue-tollero",
  storageBucket: "vue-tollero.appspot.com",
  messagingSenderId: "1039006413250",
  appId: "1:1039006413250:web:0d81ef2bc4b826c63ca65b",
  measurementId: "G-NCQHRGTJKE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
