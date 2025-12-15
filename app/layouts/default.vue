<template>
  <Header />
  <main class="mx-auto max-w-3xl py-4">
    <slot />
  </main>
</template>

<script setup>
import Header from '../components/molecules/Header.vue'
</script>

<style scoped></style>
