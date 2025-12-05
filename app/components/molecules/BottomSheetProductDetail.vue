<template>
  <Transition name="fade">
    <section v-if="isOpen" class="fixed left-0 bottom-0 right-0 top-0 z-30 bg-neutral-600/60 flex items-end" @click.self="handleClose">
      <Transition name="slide-up">
        <div v-if="isOpen" class="w-full max-w-3xl mx-auto relative h-[96vh] bg-white rounded-t-2xl p-4 overflow-y-auto flex flex-col gap-4">
          <!-- Header -->
          <div class="flex items-center mb-4 sticky top-0 bg-white">
            <div class="flex items-center gap-2 flex-auto">
              <div class="bg-fuchsia-500/10 rounded-full size-7 flex items-center justify-center">
                <LucideStore class="h-[18px] w-auto text-fuchsia-500" />
              </div>
              <span class="text-fuchsia-500 text-sm font-medium line-clamp-1">{{ product?.merchantName || "Nama Toko" }}</span>
            </div>
            <button @click="handleClose" class="size-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <LucideX class="h-5 w-auto text-gray-600" />
            </button>
          </div>

          <!-- Content -->
          <div v-if="product">
            <NuxtImg :src="product.image" :alt="product.title" format="webp" loading="lazy" fetch-priority="low" class="w-full h-full max-h-[350px] md:max-h-[400px] aspect-square object-cover rounded-xl" />

            <div class="p-2">
              <p class="text-gray-600 text-base font-semibold min-h-[24px] line-clamp-2 mb-0.5">
                {{ product.title }}
              </p>
              <p class="text-gray-500 text-sm font-normal line-clamp-2 mb-2">
                {{ product.subtitle }}
              </p>

              <span v-if="product.originalPrice" class="flex items-start gap-1.5">
                <span class="text-gray-500 text-xxs font-medium line-clamp-2 line-through">
                  {{ product.originalPrice }}
                </span>
                <span v-if="product.discount" class="bg-fuchsia-500/10 px-0.5 text-primary text-xxs font-semibold rounded">
                  {{ product.discount }}
                </span>
              </span>

              <p class="text-primary text-lg font-bold mb-1">{{ product.price }}</p>

              <span class="flex items-center text-xxs">
                <LucideStar class="h-3.5 w-auto text-yellow-400 me-0.5" />
                <p class="text-gray-500 text-xxs font-normal">{{ product.rating }}</p>
                <span class="h-1.5 w-[1px] bg-gray-400 mx-1" />
                <p class="text-gray-500 text-xxs font-normal">{{ product.sold }} Terjual</p>
              </span>

              <div class="mt-3 flex items-center justify-between">
                <p class="text-xs text-neutral-600">Jumlah</p>
                <div class="flex items-center justify-between gap-0.5 mt-1 p-0.5">
                  <button class="border border-fuchsia-500 rounded-full size-5 md:size-5 flex items-center justify-center" @click="dec">
                    <LucideMinus class="h-5 w-auto text-fuchsia-500" />
                  </button>
                  <input type="text" class="w-6 text-center text-sm font-semibold text-gray-500 focus:outline-none" :value="qtyState" readonly />
                  <button class="border border-fuchsia-500 rounded-full size-5 md:size-5 flex items-center justify-center" @click="inc">
                    <LucidePlus class="h-5 w-auto text-fuchsia-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex items-center justify-center h-64">
            <p class="text-gray-400">Tidak ada data produk</p>
          </div>

          <!-- footer -->
          <div class="w-full grid grid-cols-1 gap-2 sticky bottom-0 mt-auto">
            <AtomsButton class="w-full flex items-center justify-center gap-2 font-normal" variant="outline" @click="addToCart">
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
  id: number;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  rating: number;
  sold: number;
  merchantName: string;
}

interface Props {
  isOpen: boolean;
  product: Product | null;
  qty?: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["close", "update:qty"]);
const qtyState = ref(props.qty ?? 1);

const handleClose = () => {
  emit("close");
};

const addToCart = () => {
  console.log("Menambahkan produk ke cart:", props.product);
};

// Handle escape key untuk close
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.isOpen) {
    handleClose();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
});

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
