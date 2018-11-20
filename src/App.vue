<template>
  <v-app>
    <v-toolbar app>
      <!-- TODO menu here -->
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
export default {
  name: 'App',
};
</script>

<style>
</style>
