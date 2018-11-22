<template>
  <v-app>
    <div class="app-spinner"
      v-if="$store.state.loading"
    >
      <v-progress-circular
      indeterminate
      color="amber"
      size="70"
      ></v-progress-circular>
    </div>
    <v-toolbar dark>
      <app-menu v-if="user"></app-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import AppMenu from '@/components/Partials/AppMenu';

export default {
  name: 'App',
  components: {
    AppMenu,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    '$store.state.user': function checkLogin(newValue) {
      if (!newValue) {
        this.$router.push({ path: '/login' });
      }
    },
  },
};
</script>

<style scoped>
.app-spinner {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
}
</style>
