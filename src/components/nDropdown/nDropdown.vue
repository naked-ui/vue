<template>
    <div class="n-dropdown n-dropdown__wrapper"
      :nui-namespace="uiNamespace"
      :tabindex="tabindex"
      v-clickout="onClickOut"
    >
      <span class="n-dropdown--label" v-if="label">{{ label }}</span>
      <div :id="uiElementID" class="n-dropdown--list"  @click.stop="open = !open">
        <button class="n-dropdown--list__field">{{ initialValue }}</button>
        <SlotsEventListener @handleClickOption="handleClickOption">
          <ul class="n-dropdown--list__options" v-show="open">
            <slot />
          </ul>
        </SlotsEventListener>
      </div>
    </div>
</template>

<script>
import uuidMixin from '../../utils/uuid'
import clickout from '../../utils/clickout'
import namespaceMixin from '../../utils/namespace'
import SlotsEventListener from '../../utils/slotsEventListener'

export default {
  name: 'nn-dropdown',
  mixins: [namespaceMixin, uuidMixin],
  components: { SlotsEventListener },
  directives: { clickout },
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    initialValue () {
      return this.selected ?
        this.selected :
        this.placeholder ?
        this.placeholder :
        'Select option...'
    },

  },
  data: () => ({
    open: false,
    selected: undefined
  }),
  methods: {
    handleClickOption (option) {
      this.selected = option
      this.$emit('input', option)
      this.$emit('change', option)
      this.setDefaultClasses()
    },
    setDefaultClasses() {
      const elements = document.querySelectorAll('.n-dropdown--list__option')

      elements.forEach(el => {
        if (el.getAttribute('data-option') === this.selected) el.classList.add('selected')
        else if (el.firstChild.tagName === 'A') el.classList.add('link')
        else {
          el.classList.add('default')
          el.classList.remove('selected')
        }
      })
    },
    onClickOut () {
      this.open = false
    }
  },
  mounted() {
    this.setDefaultClasses()
  }
}
</script>

<style lang="scss" src="./nDropdown.scss" />