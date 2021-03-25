<template>
    <div class="n-select" :style="styleVariables" :nui-namespace="uiNamespace">
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
    height: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    bgSelectColor: {
      type: String,
      default: undefined
    },
    bgOptionColor: {
      type: String,
      default: undefined
    },
    bgOptgroupColor: {
      type: String,
      default: undefined
    },
    outlineColor: {
      type: String,
      default: undefined
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value),
        change: e => this.$emit('change', e.target.value)
      }
    },
    styleVariables () {
      const height = this.height ? `--h: ${this.height};` : ''
      const width = this.width ? `--w: ${this.width};` : ''
      const bgSelectColor = this.bgSelectColor ? `--bgSelectColor: ${this.bgSelectColor};` : ''
      const bgOptionColor = this.bgOptionColor ? `--bgOptionColor: ${this.bgOptionColor};` : ''
      const bgOptgroupColor = this.bgOptgroupColor ? `--bgOptgroupColor: ${this.bgOptgroupColor};` : ''
      const outlineColor = this.outlineColor ? `--outlineColor: ${this.outlineColor};` : ''

      return height + width + bgSelectColor + bgOptionColor + bgOptgroupColor + outlineColor
    },
    initialValue () {
      return this.default ? this.default : this.value
    }
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
