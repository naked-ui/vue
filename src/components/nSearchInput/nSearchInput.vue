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
      type="text"
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
      autocorrect="off"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    >
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
  },
  computed: {
    componentClasses () {
      return [
        this.baseClassname
      ]
    },
  },
}

</script>
