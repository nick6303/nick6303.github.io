<template lang="pug">
Teleport(to="body")
  .panel(
    :style="styleSet"
  )
    .panel-header
      p.panel-title {{ config.options.headerTitle }}
      .btns
        button.close(
          @click="closePanel"
        )
          i.el-icon-close
    .panel-content
      slot
</template>

<script>
import { computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'Panel',
  props: {
    config: {
      type: Object,
      default: null
    }
  },
  emits:['close'],
  setup(props,{ emit }){
    const styleSet = computed(()=>{
      const {
        offsetX,
        offsetY
      } = props.config.options.position

      return {
        left: `calc(50% + ${offsetX}px)`,
        top: `calc(50% + ${offsetY}px)`
      }
    })

    const closePanel = ()=> {
      emit('close')
    }
    return {
      styleSet,
      closePanel,
    }
  }
})
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  z-index: 100;
  transform: translate(-50%,-50%);
  background-color: #fff;
  min-width: 600px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%), 0 -3px 8px rgb(0 0 0 / 20%);

  .panel-header {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    background-color: rgb(55, 63, 97);
    color: #fff;
    .panel-title {
      font-size: 16px;
      line-height: 2;
      margin: 0 5px 0 8px;
    }
    .btns {
      display: flex;
      align-items: center;
      button {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 26px;
        transition: all .2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        &:hover {
          background-color: rgba(255, 30, 30, 0.6);
        }
      }
    }

  }

  ::v-deep(.panelContent) {
    .contentWrapper{
      margin: 1rem 0;
      padding: 0 1.8rem;
      .el-form-item {
        display: flex;
        &__label {
          padding: 0 5px 0 0;
          width: 130px;
          &::after {
            content: '：';
            font-weight: bold;
          }
        }
        &__content {
          width: calc( 100% - 130px );
          .el-rate {
            height: 100%;
            display: flex;
            align-items: center;
            padding-bottom: 5px;
            &__icon {
              margin-right: 0;
              font-size: 28px;
              &.hover {
                transform: scale(1);
              }
            }
          }
        }
      }
    }
    .buttonWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.2rem;
      box-shadow: 0 -2px 8px 0 rgb(0 0 0 / 20%);
      .el-button {
        font-size: 14px;
        min-height: unset;
        height: 34px;
        padding: 0 1rem;
      }
    }
  }

  ::v-deep(.previewImg) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 145px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 0 0;
  }

}

</style>