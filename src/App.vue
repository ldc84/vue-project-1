<template>
  <div id="app">
    <Header />
    <div id="body">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~@/layout/Header.vue';
import Footer from '~@/layout/Footer.vue';
import '@/assets/style.css';

export default {
  name: 'Index',
  components: {
    Header,
    Footer
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
