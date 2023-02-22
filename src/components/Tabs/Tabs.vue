<template lang="pug">
.tabs
  ul
    li(
      :class="{active: checkUrlPath({menuCode: 'EditIndex'})}"
      @click.prevent="switchRoute({path: ''})"
    )
      p 首頁
    li(
      v-for="item in tabs"
      :class="{active: checkUrlPath(item)}"
      @mousedown="handleMouseMiddleClick($event, item)"
      @click.prevent="switchRoute(item)"
    )
      p {{item.menuTitle}}
      i.el-icon-close.closeTab(
        @click.stop="closeTab(item)"
      )
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent,computed } from 'vue'
import router from '@router'

export default defineComponent({
  setup(){
    const store = useStore()
    const tabs = computed(()=> store.state.tabs.tabs)

    const closeTab = (tab)=>{
      const tabIndex = tabs.value.findIndex(el => el.menuCode === tab.menuCode)
      const isCurrentRoute = (router.currentRoute.value.name === tabs.value[tabIndex].menuCode)
      if (isCurrentRoute) {
        let path = '/edit'
        if (tabIndex) {
          path = `/edit/${tabs.value[tabIndex - 1].path}`
        }
        router.push(path)
      }
      store.dispatch('tabs/closeTab',tab)
    }

    const switchRoute = (item)=>{
      router.push(`/edit/${item.path}`)
    }

    const checkUrlPath = (item)=>{
      const routerName = router.currentRoute.value.name
      return routerName === item.menuCode
    }

    const handleMouseMiddleClick = (e, tab)=>{
      if (e.button === 1) {
        closeTab(tab)
      }
    }

    return {
      tabs,
      closeTab,
      switchRoute,
      checkUrlPath,
      handleMouseMiddleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs {
  background-color: #edeff3;
  height: 50px;
  width: 100%;
  overflow: auto;
  box-shadow: 0 2px 5px #b2afb9;
  position: relative;
  z-index: 100;
  ul {
    display: flex;
    li {
      display: flex;
      color: #606266;
      font-size: 14px;
      width: 150px;
      height: 50px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      cursor: pointer;
      transition: all .3s ease;
      &:hover {
        background-color: #e1e4ea;
        color: #55515b;
        &::before {
          height: 3px;
        }
      }
      &.active {
        &::before {
          height: 3px;
          background-color: #ff6c5f;
        }
      }
      &::before {
        content: '';
        display: block;
        width: 100%;
        background-color: #9fa4b9;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .3s ease
      }
      p {
        width: 85px;
        text-align: center;
      }
      .closeTab {
        border: none;
        border-radius: 50px;
        &:hover {
          background-color: #a5a8ae;
          color: #fff;
        }
      }
    }
  }
}
</style>