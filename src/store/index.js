/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    userData: {},
    error: null,
    loading: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', user);
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    setError(state, error) {
      state.error = error;
      localStorage.removeItem('user');
    },
    clearError(state) {
      state.error = null;
    },
    changeLoadingStatus(state, newStatus) {
      state.loading = newStatus;
    },
    removeUser(state) {
      state.user = null;
      state.userData = {};
      localStorage.removeItem('user');
    }
  },
  actions: {
    signUserOut({commit}) {
      console.log(this);
      firebase.auth().signOut()
        .then(() => {
          // complete
          commit('removeUser');
        })
        .catch(() => {
          // error
          commit('setError', error);
          console.log(error);
        })
    },
    signUserUp ({commit}, data) {
      commit('changeLoadingStatus', true);
      return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(
          user => {
            return new Promise(( resolve, reject ) => {
              firebase.auth().currentUser.updateProfile({
                  displayName: data.username,
              })
              .then(
                () => {
                  console.log(user.user.displayName, 'Promise');
                  resolve(user);
                }
              )
              .catch(
                error => {
                  reject(error);
                }
              )
            });
          }
        )
        .then(
          user => {
            console.log(user.user.displayName, 'ZEN');
            commit('setError', null);
            commit('changeLoadingStatus', false);
            const newUser = {
              id: user.user.uid,
            };
            commit('setUser', newUser.id);
            commit('setUserData', { email: user.user.email, name: user.user.displayName });

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
            console.error(error);
          }
        )
    },
    getUserName({commit}) {
      firebase.auth().currentUser
    }
  },
});
