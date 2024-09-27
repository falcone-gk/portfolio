// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxthub/core", "@nuxtjs/mdc", "nuxt-auth-utils"],
  runtimeConfig: {
    postmailToken: process.env.POSTMAIL_TOKEN,
  },
  $production: {
    runtimeConfig: {
      public: {
        auth: true,
      },
      basicAuth: {
        enabled: true,
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD,
      },
    },
    nitro: {
      experimental: {
        wasm: true,
      },
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        auth: false,
      },
      basicAuth: {
        enabled: false,
        username: "admin",
        password:
          "$2y$10$sa7YxQ33oAv8VLaBW.O19uhbRmTC2mX8Jmuv3RCK18s51MunbH1Z2",
      },
    },
    hub: {
      remote: true,
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  css: ["~/assets/css/main.css"],
  ui: {
    icons: ["logos"],
  },
  imports: {
    dirs: ["types/*.d.ts"],
  },
  routeRules: {
    // "/": { prerender: true },
    "/admin/**": { ssr: false },
    "/login": { ssr: false },
    "/api/**": { cors: true },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  hub: {
    database: true,
  },
  mdc: {
    highlight: {
      highlighter: "shiki",
      langs: ["vue", "ts", "js", "py"],
      theme: "catppuccin-macchiato",
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          "shiki/onig.wasm", // !Important: externalize the wasm import
        ],
      },
    },
  },
});
