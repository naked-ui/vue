<template>
  <div
    class="toggle-input"
    :nui-namespace="uiNamespace"
  >
    <label class="switch toggle-input__label">
      <input type="checkbox" class="toggle-input__checkbox">
      <span class="slider round toggle-input__node" />
    </label>
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nToggleInput'
}

</script>

<style lang="scss" src="./nToggleInput.scss" />
