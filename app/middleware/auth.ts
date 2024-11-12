export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn.value && config.public.auth) {
    return navigateTo({
      path: "/login",
      // query: { next: from.fullPath },
    });
  }
});
