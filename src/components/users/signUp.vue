<template>
  <div id="signUp">
    <h2 class="h2-title">Sign Up</h2>
    <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
      <div v-if="form">
        <a-form-item
          :validateStatus="ErrorCheck('userEmail') ? 'error' : ''"
          :help="ErrorCheck('userEmail') || ''"
          fieldDecoratorId="userEmail"
          :fieldDecoratorOptions="{rules: [
            { type:'email', message: 'The input is not valid E-mail!' }, 
            {required: true, message: 'Please input your E-mail!'}
          ]}"
        >
          <a-input placeholder='User Email' size='large' />
        </a-form-item>
        <a-form-item
          :validateStatus="ErrorCheck('password') ? 'error' : ''"
          :help="ErrorCheck('password') || ''"
          fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [
            { min:6 , message: 'Please enter at least 6 characters' },
            { required: true, message: 'Please input your Password!' }
          ]}"
        >
          <a-input type='password' size='large' placeholder='Password' />
        </a-form-item>
        <a-form-item
          :validateStatus="ErrorCheck('passwordConfirm') ? 'error' : ''"
          :help="ErrorCheck('passwordConfirm') || ''"
          fieldDecoratorId="passwordConfirm"
          :fieldDecoratorOptions="{rules: [
            { required: true, message: 'Please input your Password!' },
            { validator: compareToFirstPassword }
          ]}"
        >
          <a-input type='password' size='large' placeholder='Password Confirm' />
        </a-form-item>
        <a-form-item class="item-center">
          <a-button
            type='primary'
            htmlType='submit'
            size='large'
            :disabled="hasErrors(form.getFieldsError())"
          >
            Sign Up
          </a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script>
import { globalEvent } from '@/common/event';
import firebase from 'firebase'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: null,
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {

    // firebase 회원가입
    SignUp (values) {

      globalEvent.$emit('loadingShow');

      // sign-up
      firebase.auth().createUserWithEmailAndPassword(values.userEmail, values.password)
        .then((values) => {
          console.log(values);
          this.$notification.success({
            message: 'Success',
            description: '회원가입이 완료되었습니다.',
          });
          this.$router.push('/');
          globalEvent.$emit('loadingHide');
        })
        .catch((error) => {
          console.log(error);
          globalEvent.$emit('loadingHide');
        })
      // this.$store.dispatch('signUp');
    },

    // Only show error after a field is touched.
    ErrorCheck (val) {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched(val) && getFieldError(val)
    },

    compareToFirstPassword  (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!')
      } else {
        callback()
      }
    },

    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.SignUp(values);
        }
      })
    },
  },
}
</script>

<style scoped>
#signUp {
  padding:0;
}

</style>
