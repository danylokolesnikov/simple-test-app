<template lang="html">
  <div class="name">
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
                  <span class="headline" v-if="name">Profile Name: {{name}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.userData.name;
    },
  },
};
</script>

<style lang="css">
</style>
