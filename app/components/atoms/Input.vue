<template>
  <div>
    <input type="text" :placeholder="placeholder" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <div v-if="rightIcon" class="absolute top-1/2 right-3 transform -translate-y-1/2">
      <NuxtImg :src="rightIcon" format="webp" loading="lazy" fetch-priority="low" class="h-5 w-auto" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    rightIcon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
};
</script>
