<template lang="pug">
section.smooth-scroll(ref="smoothScroll")
  slot
</template>
<script>
import ScrollBar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { defineComponent,onBeforeUnmount, onMounted ,ref } from 'vue'

export default defineComponent({
  name: 'ScrollBar',
  props: {
    overscroll: {
      type: Boolean,
      default: undefined,
    },
    alwaysShowTracks: {
      type: Boolean,
      default: false,
    },
  },
  setup(props,{emit}){
    const scroll= ref(null)

    const position = ref([])


    const init= ()=> {
      if (!scroll.value) {
        const option = {
          plugins: {
            alwaysShowTracks: props.alwaysShowTracks,
            overscroll: {
              effect: 'glow',
            },
          },
        }
        if (props.overscroll) {
          ScrollBar.use(OverscrollPlugin)
          option.plugins.overscroll.onScroll = function (position) {
            checkIfReachEnd(position)
          }
        }
        // scroll.value = ScrollBar.init(this.$el, option)
      }
    }

    const uninit=()=> {
      if (scroll.value) {
        scroll.value.destroy()
        scroll.value = null
      }
    }

    // const scrollToTop = ()=> {
    //   scroll.value.scrollTo(0, 0, 500)
    // }

    // const scrollToView = (dom)=> {
    //   if (scroll.value) {
    //     scroll.value.scrollIntoView(dom, {
    //       alignToTop: true,
    //     })
    //   }
    // }

    const  checkIfReachEnd = (posi)=> {
      if (!posi.y && posi[this.position.length - 1] > 0) {
        emit('reach-end')
        position.value = []
      } else {
        position.value.push(posi.y)
      }
    }

    // const reposition = () => {
    //   if (scroll.value) {
    //     scroll.value.setPosition(0, 0)
    //   }
    // }

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      uninit()
    })
  }
})
</script>
<style lang="scss" scoped>
.smooth-scroll:v-deep {
  position: relative;
  .scroll-content {
    width: 100%;
    height: 100%;
  }
}
</style>
