<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      class="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div
      v-if="rightIcon"
      class="absolute right-3 top-1/2 -translate-y-1/2 transform"
    >
      <NuxtImg
        :src="rightIcon"
        format="webp"
        loading="lazy"
        fetch-priority="low"
        class="h-5 w-auto"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    rightIcon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
}
</script>
