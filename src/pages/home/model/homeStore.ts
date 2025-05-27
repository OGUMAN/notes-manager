import { useBackendStore } from "@shared/lib/backend/backendStore";

export const useHomeStore = defineStore("home", {
  state: () => ({
    notes: [] as INote[],
    isLoading: true,
  }),
  actions: {
    fetch() {
      this.isLoading = true;
      const backend = useBackendStore();
      this.notes = backend.getNotes();

      this.isLoading = false;
    },
    add(note: INoteCreate) {
      const backend = useBackendStore();
      backend.add(note);
      this.fetch();

      showToast.success("notes.toast.added");
    },
    delete(note: INote) {
      const backend = useBackendStore();
      backend.delete(note);
      this.fetch();
      showToast.success("notes.toast.deleted");

    },
    edit(id: number, updatedNote: INoteCreate) {
      const backend = useBackendStore();
      backend.edit(id, updatedNote);
      this.fetch();
      showToast.success("notes.toast.edited");
    },
    reorderNotes(fromIndex: number, toIndex: number) {
      const backend = useBackendStore();
      backend.reorderNotes(fromIndex, toIndex);
      this.fetch();
    },
  },
});
