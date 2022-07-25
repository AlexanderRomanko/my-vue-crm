<template>
  <v-container class="fill-height">

    <v-form class="row justify-center text-center" @submit.prevent="submit">

      <v-card class="col col-lg-3 col-sm-6 mx-5 px-5">

        <h1 class="justify-center teal--text">Login page</h1>

        <v-text-field
            v-model.trim="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @keydown.enter="submit"
        ></v-text-field>

        <v-divider class="mt-1"></v-divider>

        <v-text-field
            v-model.trim="password"
            :error-messages="passwordErrors"
            label="Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            autocomplete="password"
            required
            @input="$v.password.$touch()"
            @keydown.enter="submit"
        ></v-text-field>

        <v-divider class="mt-1 mb-6"></v-divider>

        <v-btn block color="success" class="mb-5" @click="submit">Log in
          <v-icon right>mdi-send</v-icon>
        </v-btn>

        <p>
          Don't have an account?
          <router-link to="/register" class="deep-orange--text">Sign in</router-link>
        </p>

      </v-card>

    </v-form>

  </v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {

  name: 'LoginView',

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  },

  data: () => ({
    email: '',
    password: '',
    show: false,
  }),

  methods: {
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        await this.$router.push('/')
      } catch (e) {}
    }
  },

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors
          .push(`Must be at least ${this.$v.password.$params.minLength.min} characters long`)
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  }

}

</script>

<style lang="scss">

</style>
