<template lang="html">
  <div class="signin">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="pa-2">

          <v-card-text>
            <h3 class="headline text-md-center">Login</h3>
          </v-card-text>

          <!-- TODO add submit event to form -->
          <form class="flex sm12 offset-md3 md6">
            <v-text-field
              v-validate="'required|email'"
              v-model="email"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>

            <v-text-field
              v-validate="'required'"
              type="password"
              v-model="password"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              required
            ></v-text-field>


            <v-card-actions class="pa-0 mb-2 mt-4">
              <v-btn flat color="orange" @click.prevent="login">Login</v-btn>
              <v-btn flat color="orange" @click.prevent="signUp">Sign up</v-btn>
            </v-card-actions>
          </form>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import dictionary from '@/utils/dictionary';

export default {
  name: 'Login',
  $_veeValidate: {
    validator: 'Login',
  },
  data() {
    return {
      password: '',
      email: '',
      dictionary,
      // eslint-disable-next-line
    }
  },
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },

  methods: {
    login() {
      this.$validator.validateAll().then(() => {
        if (!this.$validator.errors.any()) {
          // TODO submit login
          this.$store.dispatch('loginUser', {
            email: this.email,
            password: this.password,
          })
            .then(() => {
              this.$router.push({ path: '/' });
            });
        }
      });
    },
    signUp() {
      this.$router.push({ name: 'SignUp' });
    },
  },
};
</script>

<style lang="css">
</style>
