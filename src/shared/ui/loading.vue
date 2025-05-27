<template>
  <v-progress-circular
    class="shared-loading"
    color="blue-lighten-3"
    indeterminate
    :size="48"
    :width="5"
  ></v-progress-circular>
</template>

<style lang="scss" scoped>
.shared-loading {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
