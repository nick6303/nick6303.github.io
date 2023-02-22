<template lang="pug">
#groupManageMent.views(ref="view")
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
  name: 'GroupManageMent',
  components:{
    TableWrapper
  },
  setup() {
    const { groupApi } = api
    const store = useStore()
    const { 
      setFunctionColumn,
      deleteItem,
      setTableHeight
    } = CommonMixin()

    const tableData = ref([])
    const tableHeight = ref(undefined)
    const view = ref(null)
    const searchBlock = ref(null)

    const columnSetting = [
      {
        prop: 'id',
        label: '編號',
        width: 60,
        fixed: 'left',
      },{
        prop:"title",
        label:"名稱",
      },{
        prop:"discription",
        label:"描述",
      },{
        prop:"status",
        label:"狀態",
        width: 100,
        render:(h, scope)=>{
          const {
            column,
            row,
          } = scope
          const val = row[column.property]
          return (
            <span class={ val ? 'enable' : 'stopped'}>
              { val ? '啟用中' : '已停用'}
            </span>
          )
        }
      },{
        prop:"create_time",
        label:"建立時間",
      },{
        prop: "create_name",
        label: "建立者",
        width: 120,
      },{
        prop:"update_time",
        label:"更新時間",
      },{
        prop: "update_name",
        label: "更新者",
        width: 120,
      }
    ]

    const getList = async () => {
      tableData.value = await groupApi.getGroup()
    }

    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'edit') ? `編輯權限 - #${id}` : '新增權限'

        const settings = {
          component: 'EditGroup',
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
        const deleteApi = groupApi.deleteGroup
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
      tableHeight,
      view,
      searchBlock,
      columnSetting,
      tableData,
      handleAction
    }
  }
}

</script>