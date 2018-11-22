<template lang="html">
  <div class="name">
    Profile Name: {{name}}
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
