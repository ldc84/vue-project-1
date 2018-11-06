<template>
  <div id="app">
    <a-spin :spinning="loading">
      <Header />
      <div id="body">
        <router-view></router-view>
      </div>
      <Footer />
    </a-spin>
  </div>
</template>

<script>
import { globalEvent } from '@/common/event';
import Header from '~@/layout/Header.vue';
import Footer from '~@/layout/Footer.vue';
import '@/assets/style.css';

export default {
  name: 'Index',
  data(){
    return {
      loading : false
    }
  },
  components: {
    Header,
    Footer
  },
  created(){
    // Notification Custom
    this.$notification.config({
      placement: 'bottomRight',
      bottom: '50px',
      duration: 3,
    });
  },
  mounted(){
    // loading
    globalEvent.$on('loadingShow', () => {
      this.loading = true;
    });
    globalEvent.$on('loadingHide', () => {
      this.loading = false;
    });

    // 로그인 성공
    globalEvent.$on('loginSuccess', user => {
      this.$notification.success({
        message: 'Sign In Success',
        description: `${user}님 방문해주셔서 감사합니다.`,
      });
    });

    // 로그인 실패
    globalEvent.$on('loginFail', msg => {
      this.$notification.error({
        message: 'Sign In Failed',
        description: msg,
      });
    });

    // 로그아웃
    globalEvent.$on('loginOut', () => {
      this.$notification.info({
        message: 'Sign Out',
        description: '로그아웃이 완료되었습니다.',
      });
      this.$router.push('/');
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#body {
  padding:100px;
}
</style>
