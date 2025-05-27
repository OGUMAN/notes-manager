<template>
  <PagesSettingsItem>
    <template #label>
      {{ $t("settings.toasts") }}
    </template>
    <template #input>
      <v-switch
        color="blue"
        :hide-details="true"
        v-model="store.toastsEnabled"
      ></v-switch>
    </template>
  </PagesSettingsItem>
</template>

<script lang="ts" setup>
const store = useSettingsStore();
</script>
