<template>
  <div
    ref="noteEl"
    draggable="false"
    @mousedown.prevent
    :style="{ backgroundColor: props.data?.color }"
    class="shared-note"
  >
    <div class="shared-note__title">{{ props.data?.title }}</div>
    <div class="shared-note__date">{{ formattedDate }}</div>
    <div class="shared-note__description-wrapper">
      <div>{{ props.data?.text }}</div>
    </div>

    <div class="shared-note__buttons">
      <slot name="buttons" />
    </div>

    <div
      v-if="isDraggable"
      class="shared-note__drag-handle"
      draggable="true"
      @mousedown.stop
      @dragstart="emitDragStart"
      @dragend="$emit('dragend')"
    >
      <v-icon icon="mdi-drag" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

const emit = defineEmits(["dragstart", "dragend"]);
const props = defineProps({
  data: {
    type: Object as PropType<INote>,
  },
  isDraggable: {
    type: Boolean,
    required: false,
  },
});

const noteEl = ref<HTMLElement | null>(null);
const formattedDate = ref(""); // Initialize as empty

function emitDragStart(event: DragEvent) {
  if (!noteEl.value || !event.dataTransfer) return;
  const noteRect = noteEl.value.getBoundingClientRect();
  const handleRect = (event.target as HTMLElement).getBoundingClientRect();
  const offsetX = handleRect.left - noteRect.left + handleRect.width / 2;
  const offsetY = handleRect.top - noteRect.top + handleRect.height / 2;
  event.dataTransfer.setDragImage(noteEl.value, offsetX, offsetY);
  emit("dragstart", event);
}

onMounted(() => {
  if (process.client && props.data?.date?.creation) {
    const date = dayjs(props.data?.date?.creation);
    const now = dayjs();

    if (date.isToday()) {
      formattedDate.value = date.format("HH:mm");
    } else if (date.isYesterday()) {
      formattedDate.value = "yesterday";
    } else if (date.isSame(now, "week")) {
      formattedDate.value = date.format("dddd");
    } else if (date.isSame(now, "year")) {
      formattedDate.value = date.format("MMM D");
    } else {
      formattedDate.value = date.format("MMM D, YYYY");
    }
  }
});
</script>

<style lang="scss" scoped>
.shared-note {
  width: calc(33.33% - 20px);
  padding: 25px;
  border-radius: 15px;
  height: 250px;
  position: relative;
  overflow: hidden;

  &:hover &__buttons {
    display: flex;
    gap: 5px;
  }

  &__title {
    font-weight: bold;
    font-size: 25px;
    line-height: 1em;
  }

  &__date {
    font-weight: 600;
    color: #e6e6e6;
    margin-bottom: 3px;
  }

  &__buttons {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 10px;
    display: none;
  }

  &__drag-handle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    cursor: grab;
    user-select: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.25);
    transition: background 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.35);
    }
  }

  &__description-wrapper {
    height: calc(100% - 45px);
    overflow-y: auto;
  }

  @media screen and (max-width: 1200px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 850px) {
    width: calc(100%);
  }
}
</style>
