<template functional>
  <div class="n-chip">
    <div class="n-chip__inner">
      <span v-if="props.content" class="n-chip__inner--content">{{ props.content }}</span>
      <slot v-if="$slots && $slots.default"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: 'nChip',
  props: {
      content: {
        type: String
      }
    }
}
</script>
