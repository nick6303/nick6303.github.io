<template lang="pug">
#menuManagement.views(ref="view")
  .searchBlock(ref="searchBlock")
    div
      .btnWrap
        el-button(
          class="newItem"
          type="success" plain
          icon="el-icon-plus"
          @click="handleAction({ action: 'create' })"
        ) 新增
  .tableSection
    TableWrapper(
      :tableData="tableData"
      :columnSetting="columnSetting"
      :tableHeight="tableHeight"
    )
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import api from '@api'
import TableWrapper from '@c/TableWrapper'
import { CommonMixin } from '../../mixin'


export default {
  name: 'MenuManagement',
  components:{
    TableWrapper
  },
  setup() {
    const { menuApi } = api
    const store = useStore()
    const { 
      setFunctionColumn,
      deleteItem ,
      setTableHeight
    } = CommonMixin()
    const tableData = ref([])

    const view = ref(null)
    const searchBlock = ref(null)
    const tableHeight = ref(undefined)


    const columnSetting = [
      {
        prop: 'id',
        label: '編號',
        width: 60,
        fixed: 'left',
      },{
        prop: 'icon',
        label: '圖示名稱',
        width: 90,
        render:(h, scope)=>{
          const {
            column,
            row,
          } = scope
          const val = row[column.property]
          return (<i className={`el-icon-${val} menuIcon`}
          />)
        }
      },{
        prop: 'menuTitle',
        label: '選單名稱',
        width: 150,
      },{
        prop: 'path',
        label: '路徑名稱',
      },{
        prop: 'menuCode',
        label: '選單代號'
      },{
        prop: 'create_time',
        label: '建立時間'
      },{
        prop: 'create_name',
        label: '建立者'
      },{
        prop: 'update_time',
        label: '更新時間'
      },{
        prop: 'update_name',
        label: '更新者'
      }
    ]

    const getList = async () => {
      tableData.value = await menuApi.getMenu()
    }

    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'edit') ? `編輯選單 - #${id}` : '新增選單'

        const settings = {
          component: 'EditMenu',
          headerTitle,
          contentSize: {
            width: '960px',
            height: '80%',
          },
        }
        const props = {
          action,
        }

        if (id !== null) {
          settings.id = id
          props.id = id
        } else {
          settings.id = 'only'
        }

        if (id) {
          settings.id = id
          props.id = id
        } else {
          settings.id = 'only'
        }

        const events = {
          'refresh-page': ()=>{
            getList()
          },
        }

        store.dispatch('panels/addPanel', { settings, props, events })
      } else {
        const deleteApi = menuApi.deleteMenu
        deleteItem(id, deleteApi,getList)
      }
    }

    onBeforeMount(() => {
      setFunctionColumn(columnSetting,handleAction)
    })

    onMounted(()=>{
      tableHeight.value = setTableHeight(searchBlock.value,view.value)
      getList()
    })

    return {
      view,
      searchBlock,
      tableHeight,
      columnSetting,
      tableData,
      handleAction
    }
  }
}
</script>

<style lang="scss" scoped>
.tableSection {
  ::v-deep(.menuIcon) {
    font-size: 24px;
  }
}
</style>