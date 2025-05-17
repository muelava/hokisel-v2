<template>
  <UCard variant="product">
    <template #header>
      <img src="/img/brands/hokisel.png" alt="hoksel" class="object-cover p-5 grayscale opacity-50" />
    </template>

    <h5 class="text-[13px] text-slate-600 line-clamp-2 min-h-8">{{ product.title }}</h5>
    <p class="text-[14px] text-(--ui-primary) font-bold">{{ toRupiah(product.price) }}</p>
    <p class="flex items-center">
      <UIcon name="i-lucide-star" class="size-[11px] text-amber-600" />
      <UIcon name="i-lucide-dot" class="text-slate-300 self-center" />
      <span class="text-[10px] text-slate-500">{{ formatRating(product.rating) }}</span>
      <UIcon name="i-lucide-dot" class="text-slate-300" />
      <span class="text-[10px] text-slate-500">{{ 5 }} km</span>
    </p>
  </UCard>
</template>

<script setup lang="ts">
import type { Product } from "~/types/Product.types";
const { toRupiah, formatRating } = useFormatters();

const { product } = defineProps<{
  product: Product;
}>();
</script>
