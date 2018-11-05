<template>
  <header id="header">
    <div class="container">

      <h1>
        <router-link to="/">로고</router-link>
      </h1>

      <nav id="gnb">
        <ul>
          <li>
            <router-link to="">네비1</router-link>
          </li>
          <li>
            <router-link to="">네비2</router-link>
          </li>
          <li>
            <router-link to="">네비3</router-link>
          </li>
          <li>
            <router-link to="">네비4</router-link>
          </li>
        </ul>
      </nav>
      
      <ul class="top-utill">
        <li>
          <router-link to="/SignUp"><a-avatar icon="user-add" /></router-link>
        </li>
        <li>
          <router-link to="/"><a-avatar icon="login" /></router-link>
        </li>
        <li>
          <router-link to="/"><a-avatar icon="user" /></router-link>
        </li>
        <li>
          <router-link to="/"><a-avatar icon="logout" /></router-link>
        </li>
      </ul>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
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
    position:absolute; top:10px; right:0;
    li {
      display:inline-block;
      margin:0 5px;
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
