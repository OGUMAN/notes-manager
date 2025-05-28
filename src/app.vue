<template>
  <AppMeta />
  <div class="app">
    <AppSidebar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.app {
  display: flex;
}

*,
*:after,
*:before {
  box-sizing: border-box;
  width: auto;
}

.content {
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

body,
html {
  background: #262626;
  color: white;
}

main {
  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 50px;
}

.page-title {
  margin-bottom: 20px;
}

.v-input {
  display: block !important;
}

@media screen and (max-width: 550px) {
  h1 {
    font-size: 37px;
  }

  .content {
    padding: 30px 20px;
  }
}
</style>
