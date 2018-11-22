<template lang="html">
  <div class="email">
    Profile Email: {{email}}
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
