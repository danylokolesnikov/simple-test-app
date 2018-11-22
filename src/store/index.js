/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', user);
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    changeLoadingStatus(state, newStatus) {
      state.loading = newStatus;
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  actions: {
    signUserUp ({commit}, data) {
      commit('changeLoadingStatus', true);
      return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(
          user => {
            console.log('then in store')
            commit('setError', null);
            commit('changeLoadingStatus', false);
            const newUser = {
              id: user.uid,
            };
            commit('setUser', newUser);
          }
        )
        .catch(
          error => {
            commit('changeLoadingStatus', false);
            commit('setError', error);
            console.log(error);
          }
        )
    },
    loginUser ({commit}, data) {
      commit('changeLoadingStatus', true);
      return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(
          user => {
            commit('setError', null);
            commit('changeLoadingStatus', false);
            const newUser = {
              id: user.uid,
            };
            commit('setUser', newUser);
          }
        )
        .catch(
          error => {
            commit('changeLoadingStatus', false);
            commit('setError', error);
            console.log(error);
          }
        )
    },
  },
});
