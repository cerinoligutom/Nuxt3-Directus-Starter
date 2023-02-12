export default defineNuxtRouteMiddleware((to) => {
  const token = useDirectusToken();

  if (['/login', '/register'].includes(to.path)) {
    if (token.value) {
      return navigateTo({ name: 'index' });
    } else {
      return;
    }
  }

  if (!token.value) {
    return navigateTo({ name: 'login' });
  }
});
