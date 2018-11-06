import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import * as firebase from 'firebase'
import { globalEvent } from '@/common/event'

Vue.use(Vuex)

const localstorage = window.localStorage;

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    loginState: false,
    userInfo: {
      email: '',
      uid: ''
    }
  },
  getters: {
    isLogin: (state) => {
      return state.loginState;
    },
    isUser: (state) => {
      return state.userInfo;
    }
  },
  mutations: {
    loginSuccess: (state) => {
      state.loginState = true;
    },
    emailMutation: (state, payload) => {
      state.email = payload;
    },
    passwordMutation: (state, payload) => {
      state.password = payload;
    },
    userInfoMutation: (state) => {
      if(localstorage.getItem('userEmail')){
        state.loginState = true;
        state.userInfo.email = localstorage.getItem('userEmail');
        state.userInfo.uid = localstorage.getItem('userUid');
      }
    }
  },
  actions: {
    signInUser: ({ state, dispatch }, user) => {
      firebase.auth().signInWithEmailAndPassword(state.email, state.password).then(() => {
        console.log('login success');
        dispatch('signInAuthState');
      })
      .catch((error)=> {
        console.log(error.code);
        globalEvent.$emit('loginFail', error.message);
      })
    },
    
    signInAuthState: ({ commit, state }) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const { email, uid } = user;
          state.userInfo.email = email;
          state.userInfo.uid = uid;
          localstorage.setItem('userEmail', email);
          localstorage.setItem('userUid', uid);
          globalEvent.$emit('loginSuccess', email);
          router.push('/');
          commit('loginSuccess');
        }
      });
    }

  }
})
