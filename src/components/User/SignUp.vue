<template lang="html">
  <div class="signup">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="pa-2">

          <v-card-text>
            <h3 class="headline text-md-center">Registration</h3>
          </v-card-text>

          <!-- TODO add submit event to form -->
          <form class="flex sm12 offset-md3 md6">
            <v-text-field
              v-validate="'required'"
              v-model="name"
              :error-messages="errors.collect('name')"
              label="Name"
              data-vv-name="name"
              required
            ></v-text-field>

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
              <v-btn flat color="orange" @click.prevent="signUp">Register</v-btn>
              <v-btn flat color="orange" @click.prevent="login">Login</v-btn>
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
  name: 'SignUp',
  $_veeValidate: {
    validator: 'SignUp',
  },
  data() {
    return {
      password: '',
      email: '',
      name: '',
      dictionary,
      // eslint-disable-next-line
    }
  },
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },

  methods: {
    login() {
      this.$router.push({ name: 'Login' });
    },
    signUp() {
      this.$validator.validateAll().then(() => {
        if (!this.$validator.errors.any()) {
          // TODO register user
          this.$store.dispatch('signUserUp', {
            email: this.email,
            password: this.password,
          })
            .then(() => {
              this.$router.push({ name: 'Login' });
            });
        }
      });
    },
  },
};
</script>

<style lang="css">
</style>
