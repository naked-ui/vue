<template functional>
  <div
    class="n-input-counter"
  >
    <span>{{ props.totalCharacters }}</span>
    <template v-if="props.maxlength.length > 0 || props.maxlength > 0">
      <slot name="n-input-counter__separator">/</slot>
      <span>{{ props.maxlength }}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    totalCharacters: {
      type: Number
    },
    maxlength: {
      type: [String, Number]
    }
  }
}
</script>