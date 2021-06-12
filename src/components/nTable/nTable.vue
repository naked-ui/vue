<template>
  <table :class="componentClasses">
    <slot />
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    baseClassname: {
      type: String,
      default: 'nui-table'
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname]
    }
  }
}
</script>

<style lang="scss" src="./nTable.scss" />
