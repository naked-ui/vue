<template>
  <div
    class="radio-input"
    :nui-namespace="uiNamespace"
  >
    <label class="radio-input__label">
      <input type="radio" class="radio-input__radio">
    </label>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nRadioInput'
}

</script>

<style lang="scss" src="./nRadioInput.scss" />
