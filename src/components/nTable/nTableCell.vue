<template>
  <td :class="`${baseClassname}__cell`">
    <slot />
  </td>
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
