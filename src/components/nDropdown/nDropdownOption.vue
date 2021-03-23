<template>
  <li class="dropdown--list__option" :role="role" :data-option="option" @click="selectOption">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'nDropdownOption',
  props: {
    role: {
      type: String,
      default: 'select' // internal-link | external-link | select
    }
  },
  computed: {
    option () {
      if (!this.$slots.default[0].text) return ''
      return this.$slots.default[0].text
    }
  },
  methods: {
    selectOption(e) {
      if (this.role === 'external-link' || this.role === 'internal-link') return
      this.$parent.$emit('handleClickOption', this.option)
    }
  }
}
</script>

<style lang="scss" src="./nDropdown.scss" />