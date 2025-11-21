<template>
  <section class="max-w-3xl mx-auto py-8">
    <h1 class="text-2xl font-bold text-gray-800 capitalize">{{ route.params.slug }}</h1>
    <p class="text-gray-600 mt-3">
      Ini halaman sederhana untuk slug: <span class="font-mono">{{ route.params.slug }}</span>
    </p>
  </section>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped></style>
