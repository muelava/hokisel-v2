<template>
  <section class="max-w-3xl mx-auto">
    <div class="px-4">
      <AtomsBacklink to="/">Kembali</AtomsBacklink>
      <!-- bread crumb -->
      <MoleculesBreadcrumb :items="breadcrumbItems" class="mt-4" />
    </div>

    <!-- Merchant info -->
    <div class="mt-4 mb-16 relative">
      <NuxtImg src="https://placehold.co/600x400" alt="Placeholder" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-60 rounded-b-[50px] aspect-square object-cover" />
      <div class="bg-white absolute -bottom-10 left-0 right-0 mx-auto max-w-[70%] shadow-lg rounded-xl px-5 py-6 flex items-start gap-2">
        <div class="bg-fuchsia-500/10 rounded-full size-10 flex items-center justify-center">
          <LucideStore class="h-6 w-auto text-fuchsia-500" />
        </div>
        <div class="flex-auto">
          <h2 class="text-base font-semibold text-neutral-600 mb-1.5">Kedai Ayam Goreng</h2>
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
          <button class="px-2.5 py-0.5 rounded-full border border-fuchsia-500 text-xxs text-fuchsia-500 font-normal inline-flex items-center mt-2">
            <LucideMap class="h-3.5 w-auto text-fuchsia-500 me-0.5" />
            Buka di Google Maps
          </button>
        </div>
      </div>
    </div>

    <!-- product list -->
    <div class="flex items-center gap-4 border-b border-gray-100" v-for="i in 5" :key="i">
      <div class="p-3 self-start">
        <p class="text-gray-600 text-xs font-medium min-h-[24px] line-clamp-2 mb-0.5">Ayam Goreng Special Sambal Merah Yuhuu!</p>
        <p class="text-gray-500 text-xxs font-normal line-clamp-2 mb-0.5">Ayam Goreng + Nasi + Lalaban + Sambal Merah</p>
        <p class="text-primary text-sm font-bold my-1">Rp 20.000</p>
        <span class="flex items-center text-xxs">
          <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
          <p class="text-gray-500 text-xxs font-normal">4.5</p>
          <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
          <p class="text-gray-500 text-xxs font-normal">Rating</p>
        </span>
      </div>
      <div class="p-3 self-start">
        <NuxtImg src="https://placehold.co/600x400" alt="Placeholder" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-[80px] rounded-xl aspect-square object-cover" />
        <div class="flex items-center gap-0.5 mt-1 border border-fuchsia-500 rounded-full p-0.5">
          <button class="border border-fuchsia-500 rounded-full size-4.5 flex items-center justify-center">
            <LucideMinus class="h-3.5 w-auto text-fuchsia-500" />
          </button>
          <input type="text" class="w-8 text-center text-xs" placeholder="1" readonly />
          <button class="border border-fuchsia-500 rounded-full size-4.5 flex items-center justify-center">
            <LucidePlus class="h-4 w-auto text-fuchsia-500" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- footerbar -->
  <NuxtLink to="/cart" class="w-full flex justify-center sticky bottom-0 bg-transparent py-3">
    <AtomsButton class="w-[86%] flex items-center justify-between gap-2 font-bold">
      Rp 100.000
      <template #right>
        <LucideArrowRight class="h-4 w-auto" />
      </template>
    </AtomsButton>
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: route.params.slug as string,
});

const breadcrumbItems = computed(() => [{ label: "Home", to: "/" }, { label: route.params.slug as string }]);
</script>

<style scoped></style>
