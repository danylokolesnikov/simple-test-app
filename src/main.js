// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VeeValidate from 'vee-validate';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';
import { store } from './store';
import router from './router';

Vue.use(Vuetify);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdThjfpglYCyJRAQhWnQ1KU5YD5yMfUqM',
      authDomain: 'simple-test-app-5c3a9.firebaseapp.com',
      databaseURL: 'https://simple-test-app-5c3a9.firebaseio.com',
      projectId: 'simple-test-app-5c3a9',
      storageBucket: '',
      messagingSenderId: '798695947037',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setUser', user.uid);
        this.$store.commit('setUserData', { email: user.email, name: user.displayName });
      }
    });
  },
});


export default firebase;
