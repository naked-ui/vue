<template>
  <div
    class="color-input"
    :nui-namespace="uiNamespace"
  >
    <input type="color">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nColorInput'
}

</script>
