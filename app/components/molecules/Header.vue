<template>
  <header class="sticky top-0 z-10 bg-white pb-1">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            <NuxtImg
              src="/logo/hokisel_140x140.png"
              format="webp"
              loading="lazy"
              fetch-priority="low"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>
        <div class="flex h-12 flex-1 items-end border-b border-gray-300 pb-2">
          <LucideSearch class="absolute h-5 w-auto text-gray-400" />
          <input
            type="text"
            placeholder="Ayam Goreng"
            class="w-full pe-4 ps-7 text-sm focus:placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div class="self-end pb-2">
          <NuxtLink to="/cart" class="text-fuchsia-500">
            <LucideShoppingCart class="h-5 w-auto" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped></style>
