<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2 text-xs text-fuchsia-500 hover:text-fuchsia-600"
  >
    <LucideArrowLeft class="h-3.5 w-auto" />
    <span
      ><slot>{{ label }}</slot></span
    >
  </NuxtLink>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
    label: {
      type: String,
      default: 'Kembali',
    },
  },
}
</script>
<style scoped></style>
