<template>
    <div class="select" :nui-namespace="uiNamespace" :tabindex="tabindex" @blur="open = false">
      <div class="select--selected" @click="open = !open">
        {{ selected }}
      </div>
      <div class="select--items" v-show="open">
        <div
          class="select--item"
          v-for="(option, $index) of options"
          :key="$index"
          @click="handleSelectOption(option)"
        >
          {{ option }}
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
    label: {
      type: String,
      required: false,
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false
    }
  },
  methods: {
    handleSelectOption(option) {
      this.selected = option
      this.open = false
      this.$emit('input', option)
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  }
}
</script>

<style lang="scss" src="./nSelectInput.scss" />
