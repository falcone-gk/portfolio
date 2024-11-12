// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/mdc",
    "@nuxt/eslint",
  ],
  $development: {
    runtimeConfig: {
      public: {
        auth: true,
      },
    },
    routeRules: {
      "/blog/**": { ssr: false },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        auth: true,
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
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
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
    basicAuth: {
      username: process.env.ADMIN_USER,
      password: process.env.ADMIN_PASSWORD,
      saltRounds: process.env.SALT_ROUNDS,
      secretKey: process.env.SECRET_KEY,
    },
    turso: {
      databaseUrl: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/admin/**": { ssr: false },
    "/login": { ssr: false },
    "/api/**": { cors: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
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
