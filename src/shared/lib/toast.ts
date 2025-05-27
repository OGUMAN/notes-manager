import { useToast, POSITION } from "vue-toastification";
import { i18n } from "@/plugins/i18n";

const toast = useToast();

const toastOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
};

function show(
  type: "success" | "error" | "warning" | "info",
  keyOrMessage: string,
  params?: Record<string, unknown>
) {
  const settingsStore = useSettingsStore();
  if (!settingsStore.toastsEnabled) return false;

  const message = i18n.global.t(keyOrMessage, params);
  toast[type](message, toastOptions);
}

export const showToast = {
  success: (keyOrMessage: string, params?: Record<string, unknown>) =>
    show("success", keyOrMessage, params),
  error: (keyOrMessage: string, params?: Record<string, unknown>) =>
    show("error", keyOrMessage, params),
  warning: (keyOrMessage: string, params?: Record<string, unknown>) =>
    show("warning", keyOrMessage, params),
  info: (keyOrMessage: string, params?: Record<string, unknown>) =>
    show("info", keyOrMessage, params),
};
