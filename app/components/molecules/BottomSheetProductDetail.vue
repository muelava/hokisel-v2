<template>
  <Transition name="fade">
    <section
      v-if="isOpen"
      class="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-end bg-neutral-600/60"
      @click.self="handleClose"
    >
      <Transition name="slide-up">
        <div
          v-if="isOpen"
          class="relative mx-auto flex h-[96vh] w-full max-w-3xl flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-4"
        >
          <!-- Header -->
          <div class="sticky top-0 mb-4 flex items-center bg-white">
            <div class="flex flex-auto items-center gap-2">
              <div
                class="flex size-7 items-center justify-center rounded-full bg-fuchsia-500/10"
              >
                <LucideStore class="h-[18px] w-auto text-fuchsia-500" />
              </div>
              <span class="line-clamp-1 text-sm font-medium text-fuchsia-500">{{
                product?.merchantName || 'Nama Toko'
              }}</span>
            </div>
            <button
              @click="handleClose"
              class="flex size-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
            >
              <LucideX class="h-5 w-auto text-gray-600" />
            </button>
          </div>

          <!-- Content -->
          <div v-if="product">
            <NuxtImg
              :src="product.image"
              :alt="product.title"
              format="webp"
              loading="lazy"
              fetch-priority="low"
              class="aspect-square h-full max-h-[350px] w-full rounded-xl object-cover md:max-h-[400px]"
            />

            <div class="p-2">
              <p
                class="mb-0.5 line-clamp-2 min-h-[24px] text-base font-semibold text-gray-600"
              >
                {{ product.title }}
              </p>
              <p class="mb-2 line-clamp-2 text-sm font-normal text-gray-500">
                {{ product.subtitle }}
              </p>

              <span
                v-if="product.originalPrice"
                class="flex items-start gap-1.5"
              >
                <span
                  class="text-xxs line-clamp-2 font-medium text-gray-500 line-through"
                >
                  {{ product.originalPrice }}
                </span>
                <span
                  v-if="product.discount"
                  class="text-primary text-xxs rounded bg-fuchsia-500/10 px-0.5 font-semibold"
                >
                  {{ product.discount }}
                </span>
              </span>

              <p class="text-primary mb-1 text-lg font-bold">
                {{ product.price }}
              </p>

              <span class="text-xxs flex items-center">
                <LucideStar class="me-0.5 h-3.5 w-auto text-yellow-400" />
                <p class="text-xxs font-normal text-gray-500">
                  {{ product.rating }}
                </p>
                <span class="mx-1 h-1.5 w-[1px] bg-gray-400" />
                <p class="text-xxs font-normal text-gray-500">
                  {{ product.sold }} Terjual
                </p>
              </span>

              <div class="mt-3 flex items-center justify-between">
                <p class="text-xs text-neutral-600">Jumlah</p>
                <div
                  class="mt-1 flex items-center justify-between gap-0.5 p-0.5"
                >
                  <button
                    class="flex size-5 items-center justify-center rounded-full border border-fuchsia-500 md:size-5"
                    @click="dec"
                  >
                    <LucideMinus class="h-5 w-auto text-fuchsia-500" />
                  </button>
                  <input
                    type="text"
                    class="w-6 text-center text-sm font-semibold text-gray-500 focus:outline-none"
                    :value="qtyState"
                    readonly
                  />
                  <button
                    class="flex size-5 items-center justify-center rounded-full border border-fuchsia-500 md:size-5"
                    @click="inc"
                  >
                    <LucidePlus class="h-5 w-auto text-fuchsia-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex h-64 items-center justify-center">
            <p class="text-gray-400">Tidak ada data produk</p>
          </div>

          <!-- footer -->
          <div class="sticky bottom-0 mt-auto grid w-full grid-cols-1 gap-2">
            <AtomsButton
              class="flex w-full items-center justify-center gap-2 font-normal"
              variant="outline"
              @click="addToCart"
            >
              <template #left>
                <LucideShoppingCart class="h-5 w-auto" />
              </template>
              Tambah Ke Keranjang
            </AtomsButton>
          </div>
        </div>
      </Transition>
    </section>
  </Transition>
</template>

<script setup lang="ts">
interface Product {
  id: number
  title: string
  subtitle: string
  price: string
  originalPrice?: string
  discount?: string
  image: string
  rating: number
  sold: number
  merchantName: string
}

interface Props {
  isOpen: boolean
  product: Product | null
  qty?: number
}

const props = defineProps<Props>()
const emit = defineEmits(['close', 'update:qty'])
const qtyState = ref(props.qty ?? 1)

const handleClose = () => {
  emit('close')
}

const addToCart = () => {
  console.log('Menambahkan produk ke cart:', props.product)
}

// Handle escape key untuk close
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-leave-active {
  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

.overflow-y-auto {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
</style>
