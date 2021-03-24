<template>
  <div
    class="password-input"
    :nui-namespace="uiNamespace"
  >
    <input type="password">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nPasswordInput'
}

</script>
