<template>
  <th :class="`${baseClassname}__header`">
    <slot />
  </th>
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
