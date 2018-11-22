import Vue from 'vue';
import Router from 'vue-router';
import ProfileEmail from '@/components/User/ProfileEmail';
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware) {
//     to.meta.middleware({ next, router });
//   }
//   return next();
// });

export default router;
