<template>
  <section class="fixed left-0 bottom-0 right-0 top-0 z-30 bg-neutral-600/60 flex items-end">
    <div class="w-full h-[94vh] bg-white rounded-t-2xl p-4">
      <!-- Header -->
      <div class="flex items-center mb-4">
        <div class="flex items-center gap-2 flex-auto">
          <div class="bg-fuchsia-500/10 rounded-full size-6 flex items-center justify-center">
            <LucideStore class="h-4 w-auto text-fuchsia-500" />
          </div>
          <span class="text-fuchsia-500 text-xs font-medium">Ayam Goreng Buang Waktu Anjayani</span>
        </div>
      </div>

      <!-- Content -->
      <div>
        <NuxtImg src="https://placehold.co/600x400" alt="Placeholder" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full aspect-square object-cover rounded-xl" />

        <div class="p-2">
          <p class="text-gray-600 text-base font-semibold min-h-[24px] line-clamp-2 mb-0.5">Ayam Goreng Buang Waktu - Anjayani Maknyoos</p>
          <p class="text-gray-500 text-sm font-normal line-clamp-2 mb-2">Ayam Goreng + Nasi + Lalaban + Sambal Merah</p>
          <span class="flex items-start gap-1.5">
            <span class="text-gray-500 text-xxs font-medium line-clamp-2 line-through">Rp 100.000</span>
            <span class="bg-fuchsia-500/10 px-0.5 text-primary text-xxs font-semibold rounded">80%</span>
          </span>
          <p class="text-primary text-lg font-bold mb-1">Rp 20.000</p>
          <span class="flex items-center text-xxs">
            <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
            <p class="text-gray-500 text-xxs font-normal">4.5</p>
            <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
            <p class="text-gray-500 text-xxs font-normal">100 Terjual</p>
          </span>
        </div>
      </div>

      <!-- footer -->
      <NuxtLink to="/cart" class="w-full grid grid-column gap-2 sticky bottom-0 bg-transparent py-3">
        <AtomsButton class="w-full flex items-center justify-center gap-2 font-normal" variant="outline">
          <template #left>
            <LucideShoppingCart class="h-5 w-auto" />
          </template>
          Tambah Ke Keranjang
        </AtomsButton>
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {};
</script>
