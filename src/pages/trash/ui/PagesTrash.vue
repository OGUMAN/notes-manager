<template>
  <section class="content">
    <div class="page-title">
      <h1>{{ $t("trash.title") }}</h1>
      <div class="home__count">
        {{ $t("notes.count", trashStore.notes.length) }}
      </div>
    </div>
    <SharedNoteList
      v-if="!trashStore.isLoading"
      :menu-options="[
        {
          text: $t('trash.restore_note'),
          icon: 'mdi-restore',
          action: (note: INote) => trashStore.restore(note.id),
        },
        {
          text: $t('trash.remove_note'),
          icon: 'mdi-trash-can',
          action: (note: INote) => trashStore.remove(note.id),
        },
      ]"
      :notes="trashStore.notes"
    />
    <SharedLoading v-else />
  </section>
</template>

<script lang="ts" setup>
const trashStore = useTrashStore();

onBeforeMount(() => {
  trashStore.fetch();
});
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1em;
}
</style>
