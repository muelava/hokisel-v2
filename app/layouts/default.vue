<template>
  <Header />
  <main class="max-w-7xl mx-auto py-4">
    <slot />
  </main>
</template>

<script setup>
import Header from "../components/molecules/Header.vue";
</script>

<style scoped></style>
