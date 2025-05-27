<template>
  <SharedModal @after-enter="onOpen">
    <template #activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>

    <template #title>{{ $t("home.edit_note") }}</template>

    <template #content="{ close }">
      <PagesHomeModalForm
        v-if="newNote != null"
        v-model="newNote"
        v-model:isValid="isValid"
      />
    </template>

    <template #actions="{ close }">
      <v-btn @click="editNote(close)">{{ $t("ui.submit") }}</v-btn>
    </template>
  </SharedModal>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  currentNote: {
    type: Object as PropType<INote>,
    required: true,
  },
});

const newNote = ref<INoteCreate>();
const isValid = ref(false);

const homeStore = useHomeStore();

const editNote = (callback: Function) => {
  if (!newNote.value || !isValid.value) return false;

  homeStore.edit(props.currentNote.id, newNote.value);
  callback();
};

const onOpen = () => {
  newNote.value = props.currentNote;
};
</script>
