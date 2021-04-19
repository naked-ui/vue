<template>
  <div
    :class="componentClasses"
    :style="style"
  >
    <label
      :disabled="disabled"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      type="search"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :maxlength="maxlength"
      :minlength="minlength"
      :list="listID"
      autocorrect="off"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    >
    <datalist :id="listID" v-if="enableList">
      <option v-for="option in list" :key="option" :value="option" />
    </datalist>
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'

export default {
  mixins: [formField],
  name: 'nSearchInput',
  props: {
    baseClassname: {
      type: String,
      default: 'n-form-field'
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
    enableList () {
      return this.list && this.list.length > 0
    },
    listID () {
      return this.enableList ? `${this.id}-list` : ''
    }
  },
}

</script>
