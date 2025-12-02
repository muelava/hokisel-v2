<template>
  <section class="max-w-3xl mx-auto">
    <div class="px-4">
      <NuxtLink to="/" class="flex items-center gap-2 text-sm text-fuchsia-500 hover:text-fuchsia-600"><LucideArrowLeft class="h-4 w-auto" /> Kembali</NuxtLink>
      <!-- bread crumb -->
      <MoleculesBreadcrumb :items="breadcrumbItems" class="mt-4" />
    </div>

    <div class="mt-4 relative">
      <NuxtImg src="https://placehold.co/600x400" alt="Placeholder" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-60 rounded-b-[50px] aspect-square object-cover" />
      <div class="bg-white absolute bottom-5 left-0 right-0 p-4 mx-auto max-w-[70%] shadow-lg rounded-xl p-5 flex items-start gap-2">
        <div>
          <LucideStore class="h-6 w-auto text-fuchsia-500" />
        </div>
        <div class="flex-auto">
          <h2 class="text-base font-semibold text-neutral-600 mb-1.5">{{ route.params.slug }}</h2>
          <span class="flex items-center text-xxs mb-1.5">
            <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
            <p class="text-gray-500 text-xxs font-normal">4.8</p>
            <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
            <p class="text-gray-500 text-xxs font-normal">Rating rata-rata</p>
          </span>
          <span class="flex items-center text-xxs">
            <LucideMapPin class="h-3.5 w-auto text-rose-500 me-0.5" />
            <p class="text-gray-500 text-xxs font-normal">1.4 km</p>
            <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
            <p class="text-gray-500 text-xxs font-normal">Jl. Boulevard</p>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: route.params.slug as string,
});

const breadcrumbItems = computed(() => [{ label: "Home", to: "/" }, { label: route.params.slug as string }]);
</script>

<style scoped></style>
