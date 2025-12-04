<template>
  <section class="max-w-3xl mx-auto min-h-[90vh]">
    <div class="px-4 py-3">
      <NuxtLink to="/" class="flex items-center gap-2 text-xs text-fuchsia-500 hover:text-fuchsia-600"><LucideArrowLeft class="h-3.5 w-auto" /> Kembali</NuxtLink>

      <!-- Merchant Name -->
      <div class="flex items-center">
        <div class="mt-3 flex items-center gap-2 flex-auto">
          <div class="bg-fuchsia-500/10 rounded-full size-6 flex items-center justify-center">
            <LucideStore class="h-4 w-auto text-fuchsia-500" />
          </div>
          <span class="text-fuchsia-500 text-xs font-medium">Ayam Goreng Buang Waktu Anjayani</span>
        </div>
        <div>
          <p class="text-xs text-gray-500 font-medium">2 item</p>
        </div>
      </div>

      <!-- Cart Item -->
      <div class="flex items-center gap-4 border-b border-gray-100" v-for="i in 2" :key="i">
        <div class="p-3 self-start">
          <p class="text-gray-600 text-xs font-medium min-h-[24px] line-clamp-2 mb-0.5">Ayam Goreng Special Sambal Merah Yuhuu!</p>
          <p class="text-gray-500 text-xxs font-normal line-clamp-2 mb-0.5">Ayam Goreng + Nasi + Lalaban + Sambal Merah</p>
          <p class="text-primary text-sm font-bold my-1">Rp 20.000</p>
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
    </div>

    <!-- Cart Total -->
    <p class="text-sm px-4 my-5 font-medium">Ringkasan Pembelian</p>
    <div class="px-4 flex justify-between items-center">
      <p class="text-xs text-gray-500 font-medium">Biaya Lainnya</p>
      <p class="text-gray-500 text-xs font-normal">Rp 0</p>
    </div>
    <div class="px-4 py-2 flex justify-between items-center">
      <p class="text-xs text-gray-500 font-medium">Total</p>
      <p class="text-primary text-sm font-bold">Rp 100.000</p>
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
<script setup>
useHead({
  title: "Cart - Hokisel",
});
definePageMeta({ layout: false });
</script>
