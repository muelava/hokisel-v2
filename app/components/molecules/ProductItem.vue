<template>
  <div class="flex items-center justify-between gap-4 border-b border-gray-100">
    <div class="p-3 self-start">
      <p class="text-gray-600 text-xs font-medium min-h-[24px] line-clamp-2 mb-0.5">{{ title }}</p>
      <p v-if="subtitle" class="text-gray-500 text-xxs font-normal line-clamp-2 mb-0.5">{{ subtitle }}</p>
      <p v-if="price" class="text-primary text-sm font-bold my-1">{{ price }}</p>
      <span v-if="rating !== undefined" class="flex items-center text-xxs">
        <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
        <p class="text-gray-500 text-xxs font-normal">{{ rating }}</p>
        <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
        <p class="text-gray-500 text-xxs font-normal">{{ ratingLabelComputed }}</p>
      </span>
    </div>
    <div class="p-3 self-start">
      <NuxtImg :src="imageSrc" alt="Product" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-[80px] rounded-xl aspect-square object-cover" />
      <div v-if="showQuantity" class="flex items-center justify-between gap-0.5 mt-1 border border-fuchsia-500 rounded-full p-0.5">
        <button class="border border-fuchsia-500 rounded-full size-4.5 md:size-5 flex items-center justify-center" @click="dec">
          <LucideMinus class="h-3.5 w-auto text-fuchsia-500" />
        </button>
        <input type="text" class="w-8 text-center text-xs font-semibold text-gray-500 focus:outline-none" :value="qtyState" readonly />
        <button class="border border-fuchsia-500 rounded-full size-4.5 md:size-5 flex items-center justify-center" @click="inc">
          <LucidePlus class="h-4 w-auto text-fuchsia-500" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  title: string;
  subtitle?: string;
  price?: string;
  imageSrc: string;
  rating?: number;
  ratingLabel?: string;
  qty?: number;
  showQuantity?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:qty", value: number): void;
}>();

const ratingLabelComputed = computed(() => props.ratingLabel ?? "Rating");
const qtyState = ref(props.qty ?? 1);

watch(
  () => props.qty,
  (val) => {
    if (val !== undefined) qtyState.value = val;
  }
);

function inc() {
  emit("update:qty", qtyState.value + 1);
  qtyState.value++;
}

function dec() {
  if (qtyState.value > 0) {
    emit("update:qty", qtyState.value - 1);
    qtyState.value--;
  }
}
</script>
<style scoped></style>
