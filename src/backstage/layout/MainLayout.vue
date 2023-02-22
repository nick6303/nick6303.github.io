<template lang="pug">
#edit
  el-aside.sideBar(
    :collapse="isCollapse"
    :style="{width: isCollapse ? '64px' : '200px'}"
  )
    .top
      router-link.logout(
        v-if="!isCollapse"
        to="/"
        @click="logout"
      ) 登出回首頁
      button.toggleSideBar(
        @click="toggleSideBar"
      )
        i.el-icon-s-fold
    ScrollBar.menuList
      el-menu
        template(
          v-for="(item,i) in menuList"
        )
          el-menu-item(
            v-if="item.isVisible"
            @click="routerlinkTo(item)"
          ) 
            i(:class="`el-icon-${item.icon}`")
            span(
              v-if="!isCollapse"
              slot="title"
            ) {{item.menuTitle}}
  ScrollBar.main
    .header
      Tabs
    .mainContent(v-if="!loading")
      router-view(:key="$route.path")
  Panels
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import ScrollBar from '@c/ScrollBar'
import { useStore } from 'vuex'
import router from '@router'
import Tabs from '@c/Tabs'
import Panels from '@c/Panels'
import { registerRouter } from '@router/navigation'



export default {
  name: 'Edit',
  components:{
    ScrollBar,
    Tabs,
    Panels
  },
  setup() {
    const loading = ref(false)
    const store = useStore()
    const isCollapse = ref(false)

    const menuList = computed(() => store.state.menu.menuList)

    const routerlinkTo = (item) => {
      store.dispatch('tabs/setTab',item)
      router.push(`/edit/${item.path}`)
    }

    const logout = () => {
      store.dispatch('user/setUserToken','')
    }

    const toggleSideBar = ()=> {
      isCollapse.value = !isCollapse.value
    }

    const getDefaultData = async ()=> {
      loading.value = true
      try {
        await registerRouter()
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false
      }

    }

    onMounted(()=>{
      getDefaultData()
    })

    return {
      loading,
      isCollapse,
      logout,
      menuList,
      routerlinkTo,
      toggleSideBar,
    }
  }
}
</script>

<style lang="scss" scoped>
#edit {
  height: 100vh;
  width: 100%;
  display: flex;
  .sideBar {
    height: 100%;
    display: flex;
    flex-direction: column;
    .top {
      height: 50px;
      background-color: #373f61;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
      .logout{
        width: 100px;
      }
      .toggleSideBar {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 22px;
      }
    .menuList {
      flex: 1;
      background-color: #2d253a;
      .el-menu {
        border-right: none;
        .el-menu-item {
          background-color: #2d253a;
          color: #b1abb9;
          font-size: 16px;
          &:hover, &.active {
            background-color: #5b516b;
            color: #fff;
          }
          i {
            width: 24px;
            margin-right: 5px;
          }
        }
      }
    }
  }

  .main {
    flex: 1;
    min-width: calc(100% - 200px);
    .mainContent {
      height: calc(100% - 50px);
      background-color: #fff;
      padding: 1rem;
    }
  }

  &::v-deep(.views) {
    width: 100%;
    height: 100%;
    .searchBlock{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin: 0.5rem 0;
    }
    .tableSection {
      width: 100%;
    }
  }
}
</style>