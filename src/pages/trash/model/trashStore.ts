import { useBackendStore } from "@shared/lib/backend/backendStore";

export const useTrashStore = defineStore("trash", {
  state: () => ({
    notes: [] as INote[],
    isLoading: false,
  }),
  actions: {
    fetch() {
      this.isLoading = true;
      const backend = useBackendStore();
      this.notes = backend.getTrashNotes();
      this.isLoading = false;
    },
    add(note: INote) {
      const backend = useBackendStore();
      backend.trashNotes.push(note);
      this.fetch();
    },
    remove(id: number) {
      const backend = useBackendStore();
      backend.removeTrash(id);
      this.fetch();
      showToast.success("notes.toast.removed");

    },
    restore(id: number) {
      const backend = useBackendStore();
      backend.noteRestore(id);
      this.fetch();
      showToast.success("notes.toast.restored");
    },
    clear() {
      const backend = useBackendStore();
      backend.clearTrash();
      this.fetch();
    },
  },
});
