import Vue from 'vue'
import Router from 'vue-router'

import Main from '~@/main/'

// users
import SignUp from '~@/users/signUp'
import SignIn from '~@/users/signIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/SignUp',
      name: 'SingUp',
      component: SignUp
    },
    {
      path: '/SignIn',
      name: 'SingIn',
      component: SignIn
    },
  ]
})
