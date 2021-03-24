<template>
  <div
    class="checkbox-input"
    :nui-namespace="uiNamespace"
  >
    <label class="checkbox-input__label">
      <input type="checkbox" class="checkbox-input__checkbox">
    </label>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nCheckboxInput'
}

</script>

<style lang="scss" src="./nCheckboxInput.scss" />
