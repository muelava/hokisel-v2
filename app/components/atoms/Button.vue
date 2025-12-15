<template>
  <button
    class="inline-flex items-center gap-2 rounded-full px-4 py-2"
    :class="variantClass"
  >
    <span v-if="$slots.left"><slot name="left" /></span>
    <span><slot /></span>
    <span v-if="$slots.right"><slot name="right" /></span>
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    variantClass() {
      return this.variant === 'outline'
        ? 'bg-transparent text-fuchsia-600 border border-fuchsia-600'
        : 'bg-fuchsia-600 text-white'
    },
  },
}
</script>
<style lang="css"></style>
