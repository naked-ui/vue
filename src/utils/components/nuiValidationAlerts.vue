<template functional>
  <div class="nui-validation-alerts">
    <span
      class="nui-validation-alert"
      v-for="(message, index) in props.validationMessages"
      :key="index"
      :style="`
        --color: ${message.color ? message.color : ''}
      `"
      v-html="message.content"
    />
  </div>
</template>

<script>
export default {
  name: 'nuiValidationAlerts',
  props: {
    validationMessages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
