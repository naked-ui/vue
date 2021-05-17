<template functional>
  <div class="nui-chip" v-on="listeners">
    <div class="nui-chip__inner">
      <span v-if="props.content" class="nui-chip__inner--content">{{
        props.content
      }}</span>
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
