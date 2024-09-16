// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      postmailToken: process.env.POSTMAIL_TOKEN,
    },
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
