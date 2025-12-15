<template>
  <section class="mx-auto max-w-3xl">
    <div class="px-4">
      <AtomsBacklink to="/">Kembali</AtomsBacklink>
      <!-- bread crumb -->
      <MoleculesBreadcrumb :items="breadcrumbItems" class="mt-4" />
    </div>

    <!-- Merchant info -->
    <div class="relative mb-16 mt-4">
      <NuxtImg
        src="https://placehold.co/600x400"
        alt="Placeholder"
        format="webp"
        loading="lazy"
        fetch-priority="low"
        class="aspect-square h-full max-h-60 w-full rounded-b-[50px] object-cover"
      />
      <div
        class="absolute -bottom-10 left-0 right-0 mx-auto flex max-w-[70%] items-start gap-2 rounded-xl bg-white px-5 py-6 shadow-lg"
      >
        <div
          class="flex size-10 items-center justify-center rounded-full bg-fuchsia-500/10"
        >
          <LucideStore class="h-6 w-auto text-fuchsia-500" />
        </div>
        <div class="flex-auto">
          <h2 class="mb-1.5 text-base font-semibold text-neutral-600">
            Kedai Ayam Goreng
          </h2>
          <span class="text-xxs mb-1.5 flex items-center">
            <LucideStar class="me-0.5 h-3.5 w-auto text-yellow-400" />
            <p class="text-xxs font-normal text-gray-500">4.8</p>
            <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
            <p class="text-xxs font-normal text-gray-500">Rating rata-rata</p>
          </span>
          <span class="text-xxs flex items-center">
            <LucideMapPin class="me-0.5 h-3.5 w-auto text-rose-500" />
            <p class="text-xxs font-normal text-gray-500">1.4 km</p>
            <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
            <p class="text-xxs font-normal text-gray-500">Jl. Boulevard</p>
          </span>
          <button
            class="text-xxs mt-2 inline-flex items-center rounded-full border border-fuchsia-500 px-2.5 py-0.5 font-normal text-fuchsia-500"
          >
            <LucideMap class="me-0.5 h-3.5 w-auto text-fuchsia-500" />
            Buka di Google Maps
          </button>
        </div>
      </div>
    </div>

    <!-- product list -->
    <MoleculesProductItem
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :subtitle="product.subtitle"
      :price="product.price"
      :image-src="product.image"
      :rating="product.rating"
      rating-label="Rating"
      show-quantity
      @click="openProductDetail(product)"
      class="cursor-pointer"
    />
  </section>

  <!-- footerbar -->
  <NuxtLink
    to="/cart"
    class="sticky bottom-0 flex w-full justify-center bg-transparent py-3"
  >
    <AtomsButton
      class="flex w-full items-center justify-between gap-2 font-bold"
    >
      Rp 100.000
      <template #right>
        <LucideArrowRight class="h-4 w-auto" />
      </template>
    </AtomsButton>
  </NuxtLink>

  <!-- Product Detail -->
  <MoleculesBottomSheetProductDetail
    :is-open="isBottomSheetOpen"
    :product="selectedProduct"
    @close="closeProductDetail"
  />
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: route.params.slug as string,
})

const breadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: route.params.slug as string },
])

const isBottomSheetOpen = ref(false)
const selectedProduct = ref(null)

const products = ref([
  {
    id: 1,
    title: 'Ayam Goreng Special Sambal Merah',
    subtitle: 'Ayam Goreng + Nasi + Lalaban + Sambal Merah',
    price: 'Rp 20.000',
    originalPrice: 'Rp 100.000',
    discount: '80%',
    image: 'https://placehold.co/600x400',
    rating: 4.5,
    sold: 100,
    merchantName: 'Kedai Ayam Goreng',
  },
  {
    id: 2,
    title: 'Ayam Goreng Crispy Pedas',
    subtitle: 'Ayam Goreng Crispy + Nasi + Sambal Pedas',
    price: 'Rp 25.000',
    originalPrice: 'Rp 120.000',
    discount: '75%',
    image: 'https://placehold.co/600x400',
    rating: 4.8,
    sold: 150,
    merchantName: 'Kedai Ayam Goreng',
  },
  {
    id: 3,
    title: 'Ayam Goreng Mentega',
    subtitle: 'Ayam Goreng + Nasi + Saus Mentega',
    price: 'Rp 30.000',
    originalPrice: 'Rp 150.000',
    discount: '70%',
    image: 'https://placehold.co/600x400',
    rating: 4.6,
    sold: 80,
    merchantName: 'Kedai Ayam Goreng',
  },
  {
    id: 4,
    title: 'Ayam Goreng Bumbu Bali',
    subtitle: 'Ayam Goreng + Nasi + Bumbu Bali',
    price: 'Rp 28.000',
    originalPrice: 'Rp 140.000',
    discount: '72%',
    image: 'https://placehold.co/600x400',
    rating: 4.7,
    sold: 120,
    merchantName: 'Kedai Ayam Goreng',
  },
  {
    id: 5,
    title: 'Ayam Goreng Geprek',
    subtitle: 'Ayam Goreng Geprek + Nasi + Sambal Extra Pedas',
    price: 'Rp 22.000',
    originalPrice: 'Rp 110.000',
    discount: '78%',
    image: 'https://placehold.co/600x400',
    rating: 4.9,
    sold: 200,
    merchantName: 'Kedai Ayam Goreng',
  },
])

const openProductDetail = (product: any) => {
  console.log
  selectedProduct.value = product
  isBottomSheetOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeProductDetail = () => {
  isBottomSheetOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped></style>
