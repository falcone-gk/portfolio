// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxthub/core"],
  runtimeConfig: {
    public: {
      postmailToken: process.env.POSTMAIL_TOKEN,
    },
  },
  $development: {
    runtimeConfig: {
      basicAuth: {
        enabled: true,
        username: "admin",
        password:
          "$2y$10$sa7YxQ33oAv8VLaBW.O19uhbRmTC2mX8Jmuv3RCK18s51MunbH1Z2",
      },
    },
    // hub: {
    //   remote: true,
    // },
  },
  css: ["~/assets/css/main.css"],
  ui: {
    icons: ["logos"],
  },
  imports: {
    dirs: ["types/*.d.ts"],
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  hub: {
    database: true,
  },
});
