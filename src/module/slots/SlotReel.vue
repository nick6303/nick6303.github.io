<template lang="pug">
.reel(ref='el' :class="{move:addMove}")
  .reel-inner
    img.reel-image(
      v-for="i in tileIndex"
      :src="require(`./img/${reelTileData[i]}.png`)"
    )
</template>

<script>
import { defineComponent,onBeforeMount, onMounted, reactive, ref } from 'vue'
export default defineComponent({
  name: 'SlotReel',
  setup() {
    const reelSourceData = ['0', '1', '2', '3', '4', '5', '6']

    const reelTileData = ref(null)
    const tileIndex = reactive([0, 1, 2, 3, 4, 5, 6])
    const momentum = ref(null)
    const addMove = ref(false)
    const el = ref(null)

    const reelAnimate = () => {
      addMove.value = true
    }

    const run = (val) => {
      if (val) {
        const randomNum = Math.random() * 4 + 1
        momentum.value = val + randomNum
        reelAnimate()
      }
    }

    const reelAnimateEnd = () => {
      momentum.value -= 1
      addMove.value = false
      reelTileData.value = shuffle(reelSourceData)
      if (momentum.value > 0) {
        setTimeout(reelAnimate, 10)
      }
    }

    const shuffle = (array) => {
      const data = Object.assign([], array)
      let currentIndex = data.length
      let temporaryValue
      let randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = data[currentIndex]
        data[currentIndex] = data[randomIndex]
        data[randomIndex] = temporaryValue
      }
      return data
    }

    onBeforeMount(() => {
      reelTileData.value = shuffle(reelSourceData)
    })

    onMounted(() => {
      el.value.addEventListener('transitionend', reelAnimateEnd)
    })

    return {
      el,
      addMove,
      run,
      momentum,
      reelSourceData,
      reelTileData,
      tileIndex,
    }
  },
})
</script>
