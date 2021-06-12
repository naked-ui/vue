<template>
  <tr :class="`${baseClassname}__row`">
    <slot />
  </tr>
</template>

<script>
export default {
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    }
  }
}
</script>
