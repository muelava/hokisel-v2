<template>
  <div>
    <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
      {{ label }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
  },
};
</script>
<style lang="css"></style>
