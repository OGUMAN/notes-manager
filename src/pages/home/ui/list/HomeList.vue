<template>
  <SharedNoteListDrag
    v-show="!homeStore.isLoading"
    :onReorder="homeStore.reorderNotes"
    :notes="homeStore.notes"
    :menu-options="[
        {
          text: $t('home.edit_note'),
          icon: 'mdi-pencil',
          action: (note: INote) => editNote(note),
        },
        {
          text: $t('home.delete_note'),
          icon: 'mdi-trash-can',
          action: (note: INote) => deleteNote(note),
        },
      ]"
  />
  <PagesHomeListAddButton />
  <PagesHomeModalEdit
    v-if="currentNote != null"
    v-model="isEditModalOpen"
    @after-leave="isEditModalOpen = false"
    :current-note="currentNote"
  >
  </PagesHomeModalEdit>
  <SharedLoading v-show="homeStore.isLoading" />
</template>

<script lang="ts" setup>
const homeStore = useHomeStore();

const currentNote = ref<INote>();
const isEditModalOpen = ref(false);

onBeforeMount(() => {
  homeStore.fetch();
});

function editNote(note: INote) {
  isEditModalOpen.value = true;
  currentNote.value = note;
}

function deleteNote(note: INote) {
  homeStore.delete(note);
}
</script>

<style lang="scss" scoped>
.home-list {
  position: relative;
  height: 100%;
}
</style>
