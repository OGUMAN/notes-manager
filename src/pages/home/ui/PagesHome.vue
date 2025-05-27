<template>
  <section class="home content">
    <div class="page-title">
      <h1>{{ $t("home.title") }}</h1>
      <div class="home__count">
        {{ $t("notes.count", homeStore.notes.length) }}
      </div>
    </div>

    <PagesHomeList />
  </section>
</template>

<script lang="ts" setup>
const homeStore = useHomeStore();
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  h1 {
    line-height: 1em;
  }
}
</style>
