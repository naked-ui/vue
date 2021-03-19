<template>
    <div class="select" :nui-namespace="uiNamespace">
      <label class="select-label" for="">{{ label }}</label>
      <div class="select-input__wrapper">
        <div class="select-input__inner">
          <select class="select-input__input" v-bind="$attrs" v-on="listeners">
            <slot />
          </select>
        </div>
      </div>
    </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nSelect',
  mixins: [namespaceMixin],
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    default: {
      type: String,
      default: undefined
    },
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value),
        change: e => this.$emit('change', e.target.value)
      }
    },
    initialValue () {
      return this.default ? this.default : this.value
    }
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
