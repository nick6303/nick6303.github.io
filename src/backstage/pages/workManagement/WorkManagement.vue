<template lang="pug">
#workManagement.views(ref="view")
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
  name: 'WorkManagement',
  components:{
    TableWrapper
  },
  setup() {
    const { workApi } = api
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

    const columnSetting = [
      {
        prop: 'id',
        label: '編號',
        width: 60,
        fixed: 'left',
      },{
        prop:"img",
        label:"圖片",
        width: 300,
        render:(h, scope)=>{
          //取得work的封面的圖片
          const getImgUrl =(imgName) => {
            const images = require.context('@img/work', true, /\.jpg$/)
            return images('./' + imgName)
          }
          const {
            column,
            row,
          } = scope
          const val = row[column.property]
          if(val){
            const imgName = val.split('/')[1]
            return (<img src={getImgUrl(imgName)} alt=""/>)
          } else {
            return false
          }
        }
      },{
        prop:"title",
        label:"作品名",
        width: 200
      },{
        prop:"words",
        label:"描述"
      },{
        prop:"star",
        label:"難易度",
        width: 120,
        render:(h, scope)=>{
          const {
            column,
            row,
          } = scope
          const val = row[column.property]
          return (<el-rate 
            v-model={val}
            max={5}
            disabled={true}
            text-color="#ff9900"
          />)
        }
      },{
        prop:"link",
        label:"連結"
      },{
        prop:"show_in_index",
        label:"首頁顯示",
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
      }
    ]

    const getList = async () => {
      tableData.value = await workApi.getWork()
    }
    
    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'create') ? `編輯作品集 - #${id}` : '新增作品集'

        const settings = {
          component: 'EditWork',
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
        const deleteApi = workApi.deleteWork
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