<template>
  <v-btn
    :color="'rgb(63 63 63)'"
    :variant="'elevated'"
    :class="['sidebar-switch', props.isClosed ? 'closed' : '']"
    icon="mdi-menu"
  ></v-btn>
</template>

<script lang="ts" setup>
const props = defineProps({
  isClosed: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.sidebar-switch {
  position: absolute;
  right: -23px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.4s;
}

.closed {
  transform: translateY(-50%) rotate(-90deg);
  right: -40px;
}
</style>
