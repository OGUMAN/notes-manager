<template>
  <div>
    <aside
      :class="[
        menuClosed ? 'app-sidebar__nav--closed' : '',
        'app-sidebar',
        'content',
      ]"
    >
      <nav class="app-sidebar__nav">
        <NuxtLink
          class="app-sidebar__link"
          to="/"
          exact-active-class="app-sidebar__link--active"
        >
          <v-icon icon="mdi-notebook" />
          <div>{{ $t("home.title") }}</div>
        </NuxtLink>
        <NuxtLink
          class="app-sidebar__link"
          to="/trash"
          exact-active-class="app-sidebar__link--active"
        >
          <v-icon icon="mdi-trash-can" />
          <div>{{ $t("trash.title") }}</div>
        </NuxtLink>
        <NuxtLink
          class="app-sidebar__link"
          to="/settings"
          exact-active-class="app-sidebar__link--active"
        >
          <v-icon icon="mdi-cog" />
          <div>{{ $t("settings.title") }}</div>
        </NuxtLink>
      </nav>
      <AppSidebarSwitch
        :isClosed="menuClosed"
        @click="menuClosed = !menuClosed"
      />
    </aside>

    <div
      v-if="showOverlay"
      class="sidebar-overlay"
      @click="menuClosed = true"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

const menuClosed = ref(false);
const { width } = useWindowSize();

// Automatically close the menu if width < 550
watch(width, () => {
  if (width.value < 550) {
    menuClosed.value = true;
  }
});

// Computed property to determine when to show the overlay
const showOverlay = computed(() => {
  return width.value < 550 && !menuClosed.value;
});
</script>

<style lang="scss" scoped>
$width: 280px;

.app-sidebar {
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid rgb(90, 90, 90);
  background-color: #1b1b1b;
  height: 100vh;
  width: $width;
  position: relative;
  transition: transform 0.4s, margin-right 0.4s;
  z-index: 999;

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--closed {
      transform: translateX(-100%);
      margin-right: -$width;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    padding: 10px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }

    &--active {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  }

  @media screen and (max-width: 550px) {
    position: absolute;
  }
}

/* Overlay background */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  z-index: 998; /* Just below the sidebar's z-index */
}
</style>
