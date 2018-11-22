<template lang="html">
  <div class="email">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://picsum.photos/877/658/"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline" v-if="email">Profile Email: {{email}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import firebase from '@/main';

export default {
  data() {
    return {
      currentUser: firebase,
    };
  },
  computed: {
    email() {
      return this.$store.state.userData.email;
    },
  },
};
</script>

<style lang="css">
</style>
