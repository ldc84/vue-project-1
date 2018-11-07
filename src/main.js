import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import axios from 'axios'

import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.prototype.$http = axios

var config = {
  apiKey: 'AIzaSyB20KvGNExHfCWuiDrsAHXIBRX9WqYaEd8',
  authDomain: 'vue-example1.firebaseapp.com',
  databaseURL: 'https://vue-example1.firebaseio.com',
  projectId: 'vue-example1',
  storageBucket: 'vue-example1.appspot.com',
  messagingSenderId: '686205830736'
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')