<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 my-5">
    <CardProductItem v-for="product in products" :key="product.sellerId" :product="product" />
  </div>
</template>

<script setup lang="ts">
import CardProductItem from './CardProductItem.vue';
import type { Product } from '~/types/Product.types';

const {products} = defineProps<{
  products: Product[]
}>();

</script>
