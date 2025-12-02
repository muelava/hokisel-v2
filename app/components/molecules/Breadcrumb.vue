<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink v-if="item.to" :to="item.to" class="text-neutral-500 hover:text-neutral-600 transition-colors">
        {{ item.label }}
      </NuxtLink>
      <span v-else class="text-neutral-500 font-medium">
        {{ item.label }}
      </span>
      <span v-if="index < items.length - 1" class="text-neutral-400 select-none" aria-hidden="true"> / </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>
