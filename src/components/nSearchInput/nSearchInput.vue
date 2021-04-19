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
      :value="inputValue"
      @invalid="onInvalid"
      @input="$emit('input', $event.target.value);validateFormField($event)"
      @change="$emit('change', $event.target.value);validateFormField($event)"
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :title="title"
      :nui-validation="validationEnabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :list="listID"
      autocorrect="off"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    >
    <datalist :id="listID" v-if="enableList">
      <option v-for="option in list" :key="option" :value="option" />
    </datalist>
    <nValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import formField from '../../utils/formField/index.js'
import nValidationAlerts from '../../utils/components/nValidationAlerts.vue'


export default {
  mixins: [formField],
  name: 'nSearchInput',
  components: {
    nValidationAlerts
  },
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
  data: () => ({
    inputValue: ''
  }),
  mounted () {
    this.inputValue = this.value ? this.value : ''
  }
}

</script>
