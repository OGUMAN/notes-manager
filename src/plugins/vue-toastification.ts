import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true,
  };
  nuxtApp.vueApp.use(Toast, options);
});
