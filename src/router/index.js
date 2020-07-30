import Vue from 'vue'
import VueRouter from 'vue-router'
import Bord from '../views/Bord.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Bord',
    component: Bord
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('認証中')
        next()
      } else {
        console.log('未認証')
        next({path: '/login'})
      }
    })
  }
})

export default router
