import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["nuxt-fsd", "@pinia/nuxt", "@nuxtjs/i18n", "dayjs-nuxt", "@vueuse/nuxt"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [
      vuetify(),
    ],
  },
  srcDir: "src/",
  fsd: {
    layers: ["app", "pages", "widgets", "features", "entities", "shared"],
    segments: ["ui", "model", "api", "lib", "config"],
    aliasPrefix: "@",
    preventCrossImports: false,
  },
  css: [
    'vuetify/styles',
  ],
});