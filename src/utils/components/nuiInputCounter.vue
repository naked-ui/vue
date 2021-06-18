<template functional>
  <div class="nui-input-counter">
    <span>{{ props.totalCharacters }}</span>
    <template v-if="props.maxlength.length > 0 || props.maxlength > 0">
      <slot name="nui-input-counter__separator">/</slot>
      <span>{{ props.maxlength }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'nuiInputCounter',
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
