<template>
  <section class="max-w-3xl mx-auto min-h-[90vh]">
    <div class="px-4 py-3">
      <AtomsBacklink to="/">Kembali</AtomsBacklink>

      <!-- Merchant Name -->
      <div class="flex items-center my-4">
        <div class="flex items-center gap-2 flex-auto">
          <div class="bg-fuchsia-500/10 rounded-full size-6 flex items-center justify-center">
            <LucideStore class="h-4 w-auto text-fuchsia-500" />
          </div>
          <span class="text-fuchsia-500 text-xs font-medium">Ayam Goreng Buang Waktu Anjayani</span>
        </div>
        <div>
          <p class="text-xs text-gray-500 font-medium">2 item</p>
        </div>
      </div>

      <!-- Product List -->
      <MoleculesProductItem v-for="i in 2" :key="i" title="Ayam Goreng Special Sambal Merah Yuhuu!" subtitle="Ayam Goreng + Nasi + Lalaban + Sambal Merah" price="Rp 20.000" image-src="https://placehold.co/600x400" show-quantity />
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
  <NuxtLink to="/cart" class="w-full max-w-3xl mx-auto flex justify-center sticky bottom-0 bg-transparent py-3">
    <AtomsButton class="w-full flex items-center justify-between gap-2 font-bold">
      Pesan Sekarang
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
