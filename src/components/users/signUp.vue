<template>
  <div class="signup">
    <h4>아이디</h4>
    <input v-model="email" type="text" >
    <h4>패스워드</h4>
    <input v-model="password" type="password">
    <div>
      <button @click="SignUp()">가입하기</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods : {
    SignUp () {

      // sign-out
      // firebase.auth().signOut()

      // sign-in
      // firebase.auth().signInWithEmailAndPassword(email, password)

      // sign-up
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
      // this.$store.dispatch('signUp');
    }

  }
}
</script>
