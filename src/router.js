import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

import Main from '~@/main/'

// users
import SignUp from '~@/users/signUp'
import SignIn from '~@/users/signIn'

Vue.use(Router)

const LOGIN_ONLY = (to, from, next) => {
  Store.dispatch('updateUserInfo')
  .finally(() => {
    if(!Store.getters.isLogin) {
      next({ name: 'SingIn', params: { ...to.params, refName: to.name }});      
    } else {
      next();
    }
  })
};

const NOT_LOGIN_ONLY = (to, from, next) => {
  Store.dispatch('updateUserInfo')
  .finally(() => {
    if(Store.getters.isLogin) {
      next({ name: 'Main' });
    } else {
      next();
    }
  })
};

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
      component: SignUp,
      beforeEnter: NOT_LOGIN_ONLY
    },
    {
      path: '/SignIn',
      name: 'SingIn',
      component: SignIn,
      beforeEnter: NOT_LOGIN_ONLY
    }
  ]
})
