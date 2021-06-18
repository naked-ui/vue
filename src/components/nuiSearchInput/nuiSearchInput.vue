<template>
  <div :class="componentClasses" :id="uiElementID()" :style="style">
    <label :disabled="disabled" :for="IDForLabel">
      {{ label }}
    </label>
    <input
      type="search"
      v-model="inputValue"
      @invalid="onInvalid"
      @input="
        $emit('input', $event.target.value)
        validateFormField($event)
      "
      @change="
        $emit('change', $event.target.value)
        validateFormField($event)
      "
      @blur.capture="validateFormField"
      :autofocus="autofocus"
      :disabled="disabled"
      :id="IDForLabel"
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
    />
    <datalist :id="listID" v-if="enableList">
      <option v-for="option in list" :key="option" :value="option" />
    </datalist>
    <nuiValidationAlerts
      v-if="validationMessages.length > 0"
      :validationMessages="validationMessages"
    />
  </div>
</template>

<script>
import uuID from '@/utils/uuid'
import formField from '../../utils/formField/index.js'
import nuiValidationAlerts from '../../utils/components/nuiValidationAlerts.vue'

export default {
  mixins: [uuID, formField()],
  name: 'nuiSearchInput',
  components: {
    nuiValidationAlerts
  },
  props: {
    baseClassname: {
      type: String,
      default: 'nui-search-input'
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    componentClasses() {
      return [this.baseClassname, 'nui-form-field']
    },
    enableList() {
      return this.list && this.list.length > 0
    },
    listID() {
      return this.enableList ? `${this.id}-list` : ''
    }
  },
  data: () => ({
    inputValue: ''
  }),
  mounted() {
    this.inputValue = this.value ? this.value : ''
  }
}
</script>

<style lang="scss" src="./nuiSearchInput.scss" />
