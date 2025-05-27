import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import uk from "./locales/uk.json";
import es from "./locales/es.json";

const messages = {
  en,
  uk,
  es,
};

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
