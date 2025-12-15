<template>
  <div class="flex items-center justify-between gap-4 border-b border-gray-100">
    <div class="self-start p-3">
      <p
        class="mb-0.5 line-clamp-2 min-h-[24px] text-xs font-medium text-gray-600"
      >
        {{ title }}
      </p>
      <p
        v-if="subtitle"
        class="text-xxs mb-0.5 line-clamp-2 font-normal text-gray-500"
      >
        {{ subtitle }}
      </p>
      <p v-if="price" class="text-primary my-1 text-sm font-bold">
        {{ price }}
      </p>
      <span v-if="rating !== undefined" class="text-xxs flex items-center">
        <LucideStar class="me-0.5 h-3.5 w-auto text-yellow-400" />
        <p class="text-xxs font-normal text-gray-500">{{ rating }}</p>
        <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
        <p class="text-xxs font-normal text-gray-500">
          {{ ratingLabelComputed }}
        </p>
      </span>
    </div>
    <div class="self-start p-3">
      <NuxtImg
        :src="imageSrc"
        alt="Product"
        format="webp"
        loading="lazy"
        fetch-priority="low"
        class="aspect-square h-full max-h-[80px] w-full rounded-xl object-cover"
      />
      <div
        v-if="showQuantity"
        class="mt-1 flex items-center justify-between gap-0.5 rounded-full border border-fuchsia-500 p-0.5"
      >
        <button
          class="size-4.5 flex items-center justify-center rounded-full border border-fuchsia-500 md:size-5"
          @click="dec"
        >
          <LucideMinus class="h-3.5 w-auto text-fuchsia-500" />
        </button>
        <input
          type="text"
          class="w-8 text-center text-xs font-semibold text-gray-500 focus:outline-none"
          :value="qtyState"
          readonly
        />
        <button
          class="size-4.5 flex items-center justify-center rounded-full border border-fuchsia-500 md:size-5"
          @click="inc"
        >
          <LucidePlus class="h-4 w-auto text-fuchsia-500" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
  price?: string
  imageSrc: string
  rating?: number
  ratingLabel?: string
  qty?: number
  showQuantity?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:qty', value: number): void
}>()

const ratingLabelComputed = computed(() => props.ratingLabel ?? 'Rating')
const qtyState = ref(props.qty ?? 1)

watch(
  () => props.qty,
  (val) => {
    if (val !== undefined) qtyState.value = val
  },
)

function inc() {
  emit('update:qty', qtyState.value + 1)
  qtyState.value++
}

function dec() {
  if (qtyState.value > 0) {
    emit('update:qty', qtyState.value - 1)
    qtyState.value--
  }
}
</script>
<style scoped></style>
