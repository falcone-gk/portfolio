// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxthub/core",
    "@nuxtjs/mdc",
    "nuxt-auth-utils",
    "@nuxt/eslint",
  ],
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
    routeRules: {
      "/blog/**": { ssr: false },
    },
    hub: {
      remote: true,
    },
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
  imports: {
    dirs: ["types/*.d.ts"],
  },
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  mdc: {
    highlight: {
      highlighter: "shiki",
      langs: ["vue", "ts", "js", "py", "html", "css", "json", "bash"],
      theme: "catppuccin-macchiato",
    },
  },
  ui: {
    safelistColors: ["primary", "orange", "yellow", "blue", "emerald"],
  },
  runtimeConfig: {
    postmailToken: process.env.POSTMAIL_TOKEN,
  },
  routeRules: {
    // "/": { prerender: true },
    "/admin/**": { ssr: false },
    "/login": { ssr: false },
    "/api/**": { cors: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  hub: {
    database: true,
    // blob: true,
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
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
