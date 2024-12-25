import { createResolver } from "@nuxt/kit";

const development: boolean = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  compatibilityDate: "2024-12-23",
  devtools: { enabled: false },
  srcDir: "src/",

  app: {
    // baseURL: development ? "/" : "/sites/mysite/",
    baseURL: '/',
  },

  modules: ["@nuxt/eslint", "@nuxtjs/device", "@pinia/nuxt"],

  // build: {
  //   transpile: ["gsap"], // https://nuxt.com/docs/api/nuxt-config#transpile
  // },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@": ["src/"],
          "@/*": ["src/*"],
        },
      },
    },
  },

  // imports: {
  //   dirs: [
  //     'shared/composables',
  //     'shared/utils',
  //   ]
  // },
  components: {
    global: true,
    dirs: [
      {
        path: "@/shared/components/",
        pathPrefix: false,
        extensions: [".vue"],
      },
    ],
  },

  hooks: {
    // https://nuxt.com/docs/guide/recipes/custom-routing#using-approuteroptions
    "pages:routerOptions"({ files }) {
      const resolver = createResolver(import.meta.url);
      // add a route
      files.push({
        path: resolver.resolve("./router.options.ts"),
        optional: true,
      });
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/shared/assets/scss/abstract" as *;'
        },
      },
    },
  },

})