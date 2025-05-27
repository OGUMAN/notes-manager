<template>
  <v-select
    :label="$t('ui.color')"
    v-model="selectedColor"
    :items="translatedColorOptions"
    item-value="value"
    item-title="text"
    return-object
  >
    <template #item="{ item, props }">
      <v-list-item v-bind="props" :title="''">
        <div class="d-flex align-center">
          <div
            :style="{
              width: '16px',
              height: '16px',
              backgroundColor: item.value,
              marginRight: '8px',
            }"
          ></div>
          <span>{{ item.raw.text }}</span>
        </div>
      </v-list-item>
    </template>

    <template #selection="{ item }">
      <div class="d-flex align-center">
        <div
          :style="{
            width: '16px',
            height: '16px',
            backgroundColor: item.value,
            marginRight: '8px',
          }"
        ></div>
        <span>{{ item.raw.text }}</span>
      </div>
    </template>
  </v-select>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String, // Color code like "#ff4a4a"
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { t } = useI18n();

const colorOptions = [
  { textKey: "notes.colors.red", value: "#ff4a4a" },
  { textKey: "notes.colors.green", value: "#4caf50" },
  { textKey: "notes.colors.blue", value: "#2196f3" },
  { textKey: "notes.colors.yellow", value: "#d2c240" },
  { textKey: "notes.colors.purple", value: "#9737a7" },
  { textKey: "notes.colors.orange", value: "#ff9800" },
];

const translatedColorOptions = computed(() =>
  colorOptions.map((option) => ({
    value: option.value,
    text: t(option.textKey),
  }))
);

const selectedColor = computed({
  get() {
    return (
      translatedColorOptions.value.find(
        (opt) => opt.value === props.modelValue
      ) || null
    );
  },
  set(newItem) {
    emit("update:modelValue", newItem?.value ?? null);
  },
});
</script>
