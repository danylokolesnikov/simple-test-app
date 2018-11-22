<template lang="html">
  <v-flex class="text-lg-right">
    <v-btn
      v-for="(item, key) in menuList"
      :key="key"
      :to="item.to"
    >{{item.label}}</v-btn>

    <v-btn @click="signOut" class="red ml-5">Sign Out</v-btn>
  </v-flex>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      menuList: [
        {
          label: 'My Email',
          to: '/',
        },
        {
          label: 'My Name',
          to: '/name',
        },
      ],
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch('signUserOut');
    },
  },
};
</script>

<style lang="css">
</style>
