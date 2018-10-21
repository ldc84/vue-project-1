import Vue from 'vue'
import Router from 'vue-router'

import Main from '~@/main/'

// signUp
import SignUp from '~@/users/signUp'

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
  ]
})
