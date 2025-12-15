<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs">
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        class="text-neutral-500 transition-colors hover:text-neutral-600"
      >
        {{ item.label }}
      </NuxtLink>
      <span v-else class="font-medium text-neutral-500">
        {{ item.label }}
      </span>
      <span
        v-if="index < items.length - 1"
        class="select-none text-neutral-400"
        aria-hidden="true"
      >
        /
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>
