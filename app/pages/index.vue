<template>
  <section class="px-4">
    <p class="mb-3 text-sm text-gray-600">
      Menampilkan <b>10</b> dari hasil pencarian
    </p>

    <div class="grid grid-cols-2 gap-4">
      <NuxtLink
        :to="`/merchant-name-${i}`"
        v-for="i in 5"
        :key="i"
        class="rounded-b-md rounded-t-xl shadow-sm"
      >
        <div class="relative overflow-hidden rounded-t-xl">
          <NuxtImg
            src="https://placehold.co/600x400"
            alt="Placeholder"
            format="webp"
            loading="lazy"
            fetch-priority="low"
            class="aspect-square h-full max-h-40 w-full object-cover"
          />
        </div>
        <div class="p-2">
          <p
            class="mb-0.5 line-clamp-2 min-h-[24px] text-xs font-normal text-gray-600"
          >
            Ayam Goreng Buang Waktu - Anjayani Maknyoos
          </p>
          <p class="text-primary my-1 text-xs font-bold">Rp 20.000</p>
          <span class="text-xxs flex items-center">
            <LucideStar class="me-0.5 h-3.5 w-auto text-yellow-400" />
            <p class="text-xxs font-normal text-gray-500">4.5</p>
            <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
            <p class="text-xxs font-normal text-gray-500">100 Terjual</p>
            <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
            <p class="text-xxs font-normal text-gray-500">1.1 km</p>
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Hokisel',
})
</script>

<style scoped></style>
