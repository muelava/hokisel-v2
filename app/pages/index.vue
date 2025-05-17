<template>
  <div class="max-w-lg mx-auto bg-white">
    <Navbar />

    <section class="p-4">
      <p class="text-xs">Menampilkan 10 dari hasil pencarian</p>

      <CardProductList :products="products" />
    </section>
  </div>
</template>

<script setup lang="ts">
import CardProductList from "~/components/molecules/CardProductList.vue";
import Navbar from "~/components/organisms/Navbar.vue";

useHead({
  title: "Hokisel | Kumpulan Penjual Makanan Terdekat & Terlengkap",
  meta: [{ name: "description", content: "Micro Markteplace berisi penjual makanan terdekat" }],
});

const products = ref([
  {
    sellerId: 1,
    title: "Ayam Goreng Buang Waktu",
    description: "Ayam Goreng + Nasi Timbel + Lalaban + Sambal Merah",
    price: 5000000,
    rating: 5.0,
  },
  {
    sellerId: 2,
    title: "Ayam Goreng Kus Bawor",
    description: "Ayam Goreng + Nasi + Lalaban + Sambal Terasi",
    price: 5000000,
    rating: 5.0,
  },
  {
    sellerId: 3,
    title: "Ayam Goreng Hehedonan",
    description: "Ayam Goreng + Nasi KFC + Lalaban + Sambal Hijau",
    price: 5000000,
    rating: 5.0,
  },
  {
    sellerId: 4,
    title: "Ayam Goreng Tetekbengek",
    description: "Ayam Goreng + Nasi McD + Lalaban + Sambal Matah",
    price: 5000000,
    rating: 5.0,
  }
]);

</script>
