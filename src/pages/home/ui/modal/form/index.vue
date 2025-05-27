<template>
  <v-form v-model="internalIsValid" ref="formRef">
    <v-text-field
      :label="$t('ui.title')"
      v-model="localValue.title"
      clearable
      :rules="[requiredRule]"
      @input="updateValue"
    ></v-text-field>

    <v-textarea
      v-model="localValue.text"
      @input="updateValue"
      clearable
      :label="$t('ui.description')"
      :rows="3"
      :rules="[requiredRule]"
    ></v-textarea>

    <PagesHomeModalFormColor v-model="localValue.color" @change="updateValue" />
    <span v-if="!localValue.color" style="color: red">{{
      $t("ui.color_required")
    }}</span>
  </v-form>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Object as PropType<INoteCreate>,
    required: true,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "update:isValid"]);
const localValue = reactive({ ...props.modelValue });
const formRef = ref();

// Sync validity with parent (two-way binding)
const internalIsValid = ref(props.isValid);

watch(
  () => props.isValid,
  (newVal) => {
    internalIsValid.value = newVal;
  }
);

watch(internalIsValid, (newVal) => {
  emit("update:isValid", newVal);
});

const requiredRule = (v: any) => !!v || "This field is required";

function updateValue() {
  emit("update:modelValue", { ...localValue });
}

// Keep localValue in sync with parent modelValue
watch(
  () => props.modelValue,
  (newVal) => {
    Object.assign(localValue, newVal);
  }
);

watch(
  () => localValue.color,
  () => {
    emit("update:modelValue", { ...localValue });
  }
);

// Expose validate method
defineExpose({
  validate: async () => {
    const formIsValid = await formRef.value?.validate?.();
    const colorIsValid = !!localValue.color;
    const finalIsValid = formIsValid && colorIsValid;
    internalIsValid.value = finalIsValid; // Update the internal validity
    return finalIsValid;
  },
});
</script>
