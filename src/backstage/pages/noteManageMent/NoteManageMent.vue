<template lang="pug">
#noteManageMent.views(ref="view")
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
  name: 'NoteManageMent',
  components:{
    TableWrapper
  },
  setup() {
    const { noteApi } = api
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
        label:"標題",
      },{
        prop:"url",
        label:"連結",
      },
    ]

    const getList = async () => {
      tableData.value = await noteApi.getNote()
    }

    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'edit') ? `編輯筆記 - #${id}` : '新增筆記'

        const settings = {
          component: 'EditNote',
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
        const deleteApi = noteApi.deleteNote
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