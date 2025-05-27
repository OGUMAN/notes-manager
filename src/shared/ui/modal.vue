<template>
  <v-dialog v-model="dialogModel" max-width="600">
    <template v-slot:activator="{ props }">
      <slot
        name="activator"
        :props="props"
        :open="openDialog"
        :close="closeDialog"
      />
    </template>

    <v-card>
      <v-card-title class="shared-modal__title">
        <slot name="title" />
        <v-icon
          @click="closeDialog"
          size="30"
          class="shared-modal__title-close"
          icon="mdi-close"
        />
      </v-card-title>

      <div class="shared-modal">
        <slot name="content" :close="closeDialog" />
      </div>

      <v-divider />

      <v-card-actions>
        <v-btn @click="closeDialog">{{ $t("ui.close") }}</v-btn>
        <slot name="actions" :close="closeDialog" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const openDialog = () => {
  emit("update:modelValue", true);
};

const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
.shared-modal {
  &__title {
    font-size: 28px;
    font-weight: 600;
    line-height: 1em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    &-close {
      cursor: pointer;
      color: #cacaca;
      transition: opacity 0.2s;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
}

:deep(.v-card) {
  padding: 25px 25px;
}
</style>
