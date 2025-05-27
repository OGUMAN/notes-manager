<template>
  <div class="settings-item">
    <div class="settings-item__column settings-item__column--label">
      <slot name="label" />
    </div>
    <div class="settings-item__column">
      <slot name="input" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings-item {
  max-width: 400px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__column {
    width: 50%;

    &--label {
        font-size: 18px;
    }
  }
}
</style>
