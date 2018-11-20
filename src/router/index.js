import Vue from 'vue';
import Router from 'vue-router';
import ProfileEmail from '@/components/User/ProfileEmail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProfileEmail',
      component: ProfileEmail,
    },
  ],
});
