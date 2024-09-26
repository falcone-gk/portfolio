export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  const { loggedIn } = useUserSession();
  if (!loggedIn.value && config.public.auth) {
    return navigateTo({
      path: "/login",
      query: { next: from.fullPath },
    });
  }
});
