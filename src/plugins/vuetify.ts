// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // Import the CSS for MDI

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: "#2c2c2c",
            secondary: "#ffffff1a",
            background: "rgb(37, 37, 37)",
            surface: "#2c2c2c",
          },
        },
      },
    },
    icons: {
      defaultSet: "mdi", // Set MDI as the default icon set
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
