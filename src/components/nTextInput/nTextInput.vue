<template>
  <div
    class="text-input"
    :nui-namespace="uiNamespace"
  >
    <input type="text">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nTextInput'
}

</script>
