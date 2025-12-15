<template>
  <section class="mx-auto min-h-[90vh] max-w-3xl">
    <div class="px-4 py-3">
      <AtomsBacklink to="/">Kembali</AtomsBacklink>

      <!-- Merchant Name -->
      <div class="my-4 flex items-center">
        <div class="flex flex-auto items-center gap-2">
          <div
            class="flex size-6 items-center justify-center rounded-full bg-fuchsia-500/10"
          >
            <LucideStore class="h-4 w-auto text-fuchsia-500" />
          </div>
          <span class="text-xs font-medium text-fuchsia-500"
            >Ayam Goreng Buang Waktu Anjayani</span
          >
        </div>
        <div>
          <p class="text-xs font-medium text-gray-500">2 item</p>
        </div>
      </div>

      <!-- Product List -->
      <MoleculesProductItem
        v-for="i in 2"
        :key="i"
        title="Ayam Goreng Special Sambal Merah Yuhuu!"
        subtitle="Ayam Goreng + Nasi + Lalaban + Sambal Merah"
        price="Rp 20.000"
        image-src="https://placehold.co/600x400"
        show-quantity
      />
    </div>

    <!-- Cart Total -->
    <p class="my-5 px-4 text-sm font-medium">Ringkasan Pembelian</p>
    <div class="flex items-center justify-between px-4">
      <p class="text-xs font-medium text-gray-500">Biaya Lainnya</p>
      <p class="text-xs font-normal text-gray-500">Rp 0</p>
    </div>
    <div class="flex items-center justify-between px-4 py-2">
      <p class="text-xs font-medium text-gray-500">Total</p>
      <p class="text-primary text-sm font-bold">Rp 100.000</p>
    </div>
  </section>

  <!-- footerbar -->
  <NuxtLink
    to="/cart"
    class="sticky bottom-0 mx-auto flex w-full max-w-3xl justify-center bg-transparent py-3"
  >
    <AtomsButton
      class="flex w-full items-center justify-between gap-2 font-bold"
    >
      Pesan Sekarang
      <template #right>
        <LucideArrowRight class="h-4 w-auto" />
      </template>
    </AtomsButton>
  </NuxtLink>
</template>
<script setup>
useHead({
  title: 'Cart - Hokisel',
})
definePageMeta({ layout: false })
</script>
