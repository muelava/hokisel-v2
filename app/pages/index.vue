<template>
  <section class="px-4">
    <p class="text-gray-600 text-sm">Menampilkan <b>10</b> dari hasil pencarian</p>

    <div class="grid grid-cols-2 gap-4">
      <NuxtLink :to="`/product-${i}`" v-for="i in 5" :key="i" class="shadow-sm rounded-t-xl rounded-b-md">
        <div class="relative rounded-t-xl overflow-hidden">
          <NuxtImg src="https://placehold.co/600x400" alt="Placeholder" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-40 aspect-square object-cover" />
        </div>
        <div class="p-2">
          <p class="text-gray-600 text-xs font-normal min-h-[24px] line-clamp-2 mb-0.5">Ayam Goreng Buang Waktu - Anjayani Maknyoos</p>
          <p class="text-primary text-xs font-bold my-1">Rp 20.000</p>
          <span class="flex items-center text-xxs">
            <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
            <p class="text-gray-500 text-xxs font-normal">4.5</p>
            <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
            <p class="text-gray-500 text-xxs font-normal">100 Terjual</p>
            <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
            <p class="text-gray-500 text-xxs font-normal">1.1 km</p>
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Hokisel",
});
</script>

<style scoped></style>
