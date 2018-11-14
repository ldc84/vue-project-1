<template>
  <header id="header">
    <div class="container">

      <h1>
        <router-link to="/">로고</router-link>
      </h1>

      <nav id="gnb">
        <ul>
          <li>
            <router-link to="">nav1</router-link>
          </li>
          <li>
            <router-link to="">nav2</router-link>
          </li>
          <li>
            <router-link to="">nav3</router-link>
          </li>
          <li>
            <router-link to="">nav4</router-link>
          </li>
        </ul>
      </nav>
      
      <ul class="top-utill">
        <li v-if="!isLogin">
            <router-link to="/SignUp">
              <a-tooltip placement="bottomRight" title="Sign Up">
                <a-avatar icon="user-add" />
              </a-tooltip>
            </router-link>
        </li>
        <li v-if="!isLogin">
          <router-link to="/SignIn">
            <a-tooltip placement="bottomRight" title="Sign In">
              <a-avatar icon="login" />
            </a-tooltip>
          </router-link>
        </li>
        <li v-if="isLogin">
          <a-tooltip placement="bottomRight" :title="this.$store.state.userInfo.email">
            <a-avatar icon="user" />
          </a-tooltip>
        </li>
        <li v-if="isLogin" @click="signOut">
          <a-tooltip placement="bottomRight" title="Sign Out">
            <a-avatar icon="logout" />
          </a-tooltip>
        </li>
      </ul>

    </div>
  </header>
</template>

<script>
import firebase from 'firebase';
import { mapGetters, mapActions } from 'vuex';
import { globalEvent } from '@/common/event';

export default {
  data() {
    return {

    }
  },
  created(){
    // 로컬 스토리지 정보 받아오기
    this.$store.commit('userInfoMutation');
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions(['signOut'])
  }
}
</script>

<style lang="scss" scoped>
#header {
  padding:10px 0 10px 0;
  color:#fff;
  background-color:#74b49b;
  text-align:center;

  h1 {
    position:absolute; top:10px; left:10px;
  }

  .top-utill {
    position:absolute; top:10px; right:10px;
    li {
      display:inline-block;
      margin:0 5px;
      cursor:pointer;
      span {
        background-color:#35af00;
      }
    }
  }
}

#gnb {
  padding:5px 240px 0 180px;
  ul {
    display:flex;
    justify-content:space-between;
    a {
      position:relative;
      display:block;
      padding:10px 20px;
      color:#fff;
      font-size:16px;
      font-weight:700;
      opacity:.8;
      transition:all .2s ease-in-out;
      &:after {
        content:'';
        display:block;
        position:absolute; bottom:0; left:50%;
        width:0;
        height:0;
        background-color:#a7d7c5;
        transition:all .2s ease-in-out;
      }

      &.active,
      &:hover {
        opacity:1;
        &:after {
          left:0;
          width:100%;
          height:2px;
        }
      }
    }
  }
}
</style>
