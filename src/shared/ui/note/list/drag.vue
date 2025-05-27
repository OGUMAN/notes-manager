<template>
  <div class="shared-notes-wrapper">
    <div
      v-show="props.notes.length"
      class="shared-notes"
      @dragover.prevent
      @drop="onDrop"
    >
      <SharedNote
        v-for="(note, index) in props.notes"
        :key="note.id"
        :data="note"
        draggable="true"
        :isDraggable="true"
        @dragstart="onDragStart(index, $event)"
        @dragend="onDragEnd"
      >
        <template #buttons>
          <v-menu>
            <template v-slot:activator="{ props: menuProps }">
              <v-btn variant="text" icon="mdi-dots-vertical" v-bind="menuProps">
                <v-icon icon="mdi-dots-vertical" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, itemIndex) in props.menuOptions"
                :key="itemIndex"
                @click="() => onMenuClick(item, note)"
              >
                <v-list-item-title>
                  <v-icon :icon="item.icon" /> {{ item.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </SharedNote>
    </div>
    <div v-show="!props.notes.length" class="shared-notes__empty">
      {{ $t("notes.empty") }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  notes: {
    type: Array as PropType<INote[]>,
    required: true,
  },
  menuOptions: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
});

const emit = defineEmits<{
  (e: "reorder", fromIndex: number, toIndex: number): void;
}>();

let draggedIndex = -1;

function onDragStart(index: number, event: DragEvent) {
  draggedIndex = index;
}

function onDragEnd() {
  draggedIndex = -1;
}

function onDrop(event: DragEvent) {
  const dropTarget = event.target as HTMLElement;
  const dropComponent = dropTarget.closest("[draggable=true]");
  if (!dropComponent || draggedIndex === -1) return;

  const dropIndex = Array.from(
    dropComponent.parentElement?.children || []
  ).indexOf(dropComponent);

  if (dropIndex !== -1 && dropIndex !== draggedIndex) {
    emit("reorder", draggedIndex, dropIndex);
  }
  draggedIndex = -1;
}

function onMenuClick(item: IMenuItem, note: INote) {
  if (item.action) {
    item.action(note);
  } else {
    console.log("No action defined for", item);
  }
}
</script>
