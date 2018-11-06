<template>
  <div id="signUp">
    <h2 class="h2-title">Sign In</h2>
    <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
      <div v-if="form">
        <a-form-item
          :validateStatus="ErrorCheck('email') ? 'error' : ''"
          :help="ErrorCheck('email') || ''"
          fieldDecoratorId="email"
          :fieldDecoratorOptions="{rules: [
            { type:'email', message: 'The input is not valid E-mail!' }, 
            {required: true, message: 'Please input your E-mail!'}
          ]}"
        >
          <a-input placeholder='User Email' v-model="e" size='large'>
            <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
          </a-input>
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
          <a-input type='password' size='large' v-model="p" placeholder='Password'>
            <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="item-center">
          <a-button
            type='primary'
            htmlType='submit'
            size='large'
            :disabled="hasErrors(form.getFieldsError())"
          >
            Sign In
          </a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script>
import { state, mapGetters, mapMutations, mapActions } from 'vuex';

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: null,
      e: '',
      p: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    ...mapActions([
      'signInUser'
    ]),

    // Only show error after a field is touched.
    ErrorCheck (val) {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched(val) && getFieldError(val)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.commit('emailMutation', this.e);
          this.$store.commit('passwordMutation', this.p);
          this.signInUser();
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
