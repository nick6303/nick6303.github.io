<template lang="pug">
.board
  .board-box
    .board-row(
      v-for="item in [0,1,2]"
    )
      button(
        v-for="i in [0,1,2]"
        @click='sequenceClick(item*3 + i)'
      ) {{sequence[item*3 + i]}}
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Boards',
  props: {
    sequence: {
      type: Array,
      default: null,
    },
  },
  setup(props, { emit }) {
    const sequenceClick = (i) => {
      emit('choose', i)
    }

    return {
      sequenceClick,
    }
  },
})
</script>
