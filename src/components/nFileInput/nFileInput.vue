<template>
  <div
    class="file-input"
    :nui-namespace="uiNamespace"
  >
    <input type="file">
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nFileInput'
}

</script>
