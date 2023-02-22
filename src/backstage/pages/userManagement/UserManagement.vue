<template lang="pug">
#userManagement.views(ref="view")
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
  name: 'UserManagement',
  components:{
    TableWrapper
  },
  setup() {
    const { userApi,groupApi } = api
    const store = useStore()
    const { 
      setFunctionColumn,
      deleteItem,
      setTableHeight
    } = CommonMixin()

    const tableData = ref([])
    const view = ref(null)
    const searchBlock = ref(null)
    const tableHeight = ref(undefined)

    const groupList = ref([])

    const columnSetting = [
      {
        prop: 'id',
        label: '編號',
        width: 60,
        fixed: 'left',
      },{
        prop: 'name',
        label: '名稱',
      },{
        prop: 'group',
        label: '權限',
        render:(h,scope)=>{
          const {
            column,
            row,
          } = scope
          const val = row[column.property]
          const groupItem = groupList.value.find(item=> {
            return item.id === val
          })
          const title = groupItem ? groupItem.title : ""
          return (<span>{ title }</span>)
        }
      },{
        prop: 'created_time',
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
      tableData.value = await userApi.getUser()
    }
    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'create') ? `編輯使用者 - #${id}` : '新增使用者'

        const settings = {
          component: 'EditUser',
          headerTitle,
          contentSize: {
            width: '960px',
            height: '80%',
          },
        }
        const props = {
          action,
          groupList
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
        const deleteApi = userApi.deleteUser
        deleteItem(id, deleteApi,getList)
      }
    }

    const getGroupList = async() => {
      groupList.value = await groupApi.getGroup()
    }

    onBeforeMount(() => {
      setFunctionColumn(columnSetting,handleAction)
    })

    onMounted(()=>{
      tableHeight.value = setTableHeight(searchBlock.value,view.value)
      getList()
      getGroupList()
    })

    return {
      view,
      searchBlock,
      tableHeight,
      columnSetting,
      tableData,
      handleAction,
      groupList
    }
  }
}
</script>