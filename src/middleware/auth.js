export default function auth(to, from, next) {
  if (localStorage.getItem('user')) {
    next('/');
  } else {
    next();
  }
}
