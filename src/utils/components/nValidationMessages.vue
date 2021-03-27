<template functional>
  <div
    class="nui__validation-alerts"
  >
    <span
      class="nui__validation-alert"
      v-for="(message, index) in validationMessages"
      :key="index"
      :style="`
        --color: ${message.color}
      `"
      v-html="message.content"
    />
  </div>
</template>

<script>
export default {
  name: 'nValidationAlerts',
  props: {
    validationAlerts: {
      type: Array,
      default: () => []
    }
  }
}
</script>
