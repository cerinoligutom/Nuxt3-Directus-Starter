export default defineNuxtRouteMiddleware((to) => {
  const token = useDirectusToken();

  if (!token.value) {
    return navigateTo({ name: 'login' });
  }

  if (['/login', '/register'].includes(to.path)) {
    return navigateTo('/');
  }
});
