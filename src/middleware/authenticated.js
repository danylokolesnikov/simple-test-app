import { store } from '@/store';

export default function auth(to, from, next) {
  if (!localStorage.getItem('user') || store.user) {
    next('/login');
  } else {
    next();
  }
}
