<template>
  <div class="shared-notes-wrapper">
    <div v-if="notes.length" class="shared-notes">
      <SharedNote v-for="(note, index) in notes" :key="note.id" :data="note">
        <template #buttons>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn variant="text" icon="mdi-dots-vertical" v-bind="props">
                <v-icon icon="mdi-dots-vertical" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, itemIndex) in menuOptions"
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
    <div v-else class="shared-notes__empty">{{ $t("notes.empty") }}</div>
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

function onMenuClick(item: IMenuItem, note: INote) {
  if (item.action) {
    item.action(note);
  } else {
    console.log("No action defined for", item);
  }
}
</script>

<style lang="scss">
.shared-notes-wrapper {
  overflow: auto;
}

.shared-notes {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;

  &__empty {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: #5e5e5e;
    font-size: 25px;
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
