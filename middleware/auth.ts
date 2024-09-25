export default defineNuxtRouteMiddleware((to, from) => {
  // const token = useCookie("token");
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo({
      path: "/login",
      query: { next: from.fullPath },
    });
  }
});
