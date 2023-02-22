<template lang="pug">
article#test
  component(
    :is="componentId"
  ) 
</template>

<script>
import {defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'Test',
  setup() {
    const componentId = computed(() => require('../module/ticTacToe').default)
    return { componentId }
  },
})
</script>
