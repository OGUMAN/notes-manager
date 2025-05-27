<template>
  <SharedModal v-model="isOpened" @after-leave="clear">
    <template #activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>

    <template #title>{{ $t("home.add_note") }}</template>

    <template #content>
      <PagesHomeModalForm
        v-if="isOpened"
        v-model="newNote"
        v-model:isValid="isValid"
      />
    </template>

    <template #actions>
      <v-btn @click="submitForm">{{ $t("ui.submit") }}</v-btn>
    </template>
  </SharedModal>
</template>

<script lang="ts" setup>
const emptyNote = {
  title: "",
  text: "",
  color: "#ff4a4a",
};
const newNote = ref<INoteCreate>(emptyNote);
const isOpened = ref(false);
const isValid = ref(false);

const homeStore = useHomeStore();

const submitForm = async () => {
  if (isValid.value) {
    homeStore.add(newNote.value);
    isOpened.value = false; // Close modal
    clear();
  } else {
    console.warn("Form is invalid");
  }
};

const clear = () => {
  newNote.value = { ...emptyNote };
};
</script>
