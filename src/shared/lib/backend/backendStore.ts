// this store mimics backend
import backendMock from "./backendMock.json";

export const useBackendStore = defineStore("backend", {
  state: () => ({
    notes: backendMock as INote[],
    trashNotes: [] as INote[],
    currentID: 0,
  }),
  actions: {
    // GET /api/notes
    getNotes() {
      return this.notes;
    },

    // GET /api/notes/trash
    getTrashNotes() {
      return this.trashNotes;
    },

    // POST /api/notes
    add(note: INoteCreate) {
      this.currentID++;
      const currentTimestamp = new Date().getTime();

      this.notes.push({
        ...note,
        id: this.currentID,
        date: {
          creation: currentTimestamp,
          edited: currentTimestamp,
        },
      });
    },

    // DELETE /api/notes/:id
    delete(note: INote) {
      const trashStore = useTrashStore();
      trashStore.add(note);
      // Remove note from notes array
      this.notes = this.notes.filter((n) => n.id !== note.id);
    },

    // PUT /api/notes/:id
    edit(id: number, updatedNote: INoteCreate) {
      const index = this.notes.findIndex((n) => n.id === id);
      if (index !== -1) {
        const existingNote = this.notes[index];
        this.notes[index] = {
          ...existingNote,
          ...updatedNote,
          id,
          date: {
            ...existingNote.date,
            edited: new Date().getTime(),
          },
        };
      }
    },

    // PATCH /api/notes/reorder
    reorderNotes(fromIndex: number, toIndex: number) {
      const item = this.notes[fromIndex];
      if (item) {
        this.notes.splice(fromIndex, 1);
        this.notes.splice(toIndex, 0, item);
      }
    },

    // POST /api/notes/restore/:id
    noteRestore(id: number) {
      const trashIndex = this.trashNotes.findIndex((n) => n.id === id);
      if (trashIndex !== -1) {
        const note = this.trashNotes.splice(trashIndex, 1)[0];
        this.notes.push(note);
      }
    },

    // DELETE /api/notes/trash/:id
    removeTrash(id: number) {
      this.trashNotes = this.trashNotes.filter((n) => n.id !== id);
    },

    // DELETE /api/notes/trash
    clearTrash() {
      this.trashNotes = [];
    },
  },
});
