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
      globalEvent.$emit('loadingShow');
      firebase.auth().signInWithEmailAndPassword(state.email, state.password).then(() => {
        console.log('login success');
        dispatch('signInAuthState');
      })
      .catch((error)=> {
        console.log(error.code);
        globalEvent.$emit('loginFail', error.message);
        globalEvent.$emit('loadingHide');
      })
    },
    
    signInAuthState: ({ commit, state }) => {
      firebase.auth().onAuthStateChanged( user => {
        if (user) {
          const { email, uid } = user;
          const emailId = email.split('@')[0];
          state.userInfo.email = email;
          state.userInfo.uid = uid;
          localstorage.setItem('userEmail', email);
          localstorage.setItem('userUid', uid);
          globalEvent.$emit('loginSuccess', emailId); // email 에서 id 만 짜름
          router.push('/');

          commit('loginSuccess');
          globalEvent.$emit('loadingHide');
        }
      });
    },

    updateUserInfo: ({ state }) => {
      firebase.auth().onAuthStateChanged( user => {
        (user) ? state.loginState = true : state.loginState = false ;
      })
    },

    signOut: ({ state }) => {
      globalEvent.$emit('loadingShow');
      firebase.auth().signOut().then(() => {
        state.loginState = false;
        globalEvent.$emit('loginOut');
        localstorage.removeItem('userEmail');
        localstorage.removeItem('userUid');
        globalEvent.$emit('loadingHide');
      })
    }

  }
})
