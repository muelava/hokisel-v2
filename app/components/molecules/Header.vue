<template>
  <header class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center gap-4">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            <NuxtImg src="/logo/hokisel_140x140.png" format="webp" loading="lazy" fetch-priority="low" class="h-8 w-auto" />
          </NuxtLink>
        </div>
        <div class="flex items-end flex-1 h-12 border-b border-gray-300 pb-2">
          <LucideSearch class="h-5 w-auto text-gray-400 absolute" />
          <input type="text" placeholder="Ayam Goreng" class="text-sm w-full ps-7 pe-4 focus:outline-none focus:placeholder-gray-500" />
        </div>
        <div class="pb-2 self-end">
          <NuxtLink to="/cart" class="text-fuchsia-500">
            <LucideShoppingCart class="h-5 w-auto" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped></style>
