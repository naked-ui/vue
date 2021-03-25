<template>
    <div class="n-select" :nui-namespace="uiNamespace">
      <label class="n-select--label" for="">{{ label }}</label>
      <div class="n-select__wrapper">
        <div class="n-select__inner">
          <select
            :id="uiElementID"
            class="n-select--input"
            v-bind="$attrs"
            v-on="listeners"
            :value="initialValue"
          >
            <slot />
          </select>
        </div>
      </div>
    </div>
</template>

<script>

import uuidMixin from '../../utils/uuid'
import namespaceMixin from '../../utils/namespace'

export default {
  name: 'nSelect',
  mixins: [namespaceMixin, uuidMixin],
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
