<template>
  <Title>{{ $t("meta.title") }}</Title>
</template>

<script setup>
const { t, locale } = useI18n();

useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>
