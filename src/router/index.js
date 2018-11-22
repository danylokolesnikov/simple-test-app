import Vue from 'vue';
import Router from 'vue-router';
import ProfileEmail from '@/components/User/ProfileEmail';
import ProfileName from '@/components/User/ProfileName';
import Login from '@/components/User/Login';
import SignUp from '@/components/User/SignUp';

import authenticated from '@/middleware/authenticated';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProfileEmail',
      component: ProfileEmail,
      beforeEnter: authenticated,
    },
    {
      path: '/name',
      name: 'ProfileName',
      component: ProfileName,
      beforeEnter: authenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});

export default router;
