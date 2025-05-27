<template>
  <PagesSettingsItem>
    <template #label>
      {{ $t("settings.language") }}
    </template>
    <template #input>
      <v-select
        :items="languages"
        item-title="label"
        item-value="value"
        v-model="currentLanguage"
        @update:modelValue="switchLanguage"
        variant="outlined"
        :hide-details="true"
        style="max-width: 150px"
      />
    </template>
  </PagesSettingsItem>
</template>

<script setup>
const { locale } = useI18n();

const languages = [
  { label: "English", value: "en" },
  { label: "Українська", value: "uk" },
  { label: "Espanol", value: "es" },
];

const currentLanguage = computed({
  get: () => locale.value,
  set: (val) => (locale.value = val),
});

const switchLanguage = (lang) => {
  locale.value = lang;
};
</script>
