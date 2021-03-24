<template>
  <div
    class="email-input"
    :nui-namespace="uiNamespace"
  >
    <input
      type="email"
      inputmode="email"
    >
  </div>
</template>

<script>
import namespaceMixin from '../../utils/namespace'

export default {
  mixins: [namespaceMixin],
  name: 'nEmailInput'
}

</script>
