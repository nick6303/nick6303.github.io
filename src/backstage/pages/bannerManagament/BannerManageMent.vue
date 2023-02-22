<template lang="pug">
#bannerManagament.views(ref="view")
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
  name: 'BannerManageMent',
  components:{
    TableWrapper
  },
  setup() {
    const { bannerApi } = api
    const store = useStore()
    const tableHeight = ref(undefined)

    const { 
      setFunctionColumn,
      deleteItem ,
      setTableHeight
    } = CommonMixin()

    const tableData = ref([])
    const searchBlock = ref(null)
    const view = ref(null)

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
            const images = require.context('@img/home', true, /\.jpg$/)
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
        prop:"words",
        label:"描述"
      },{
        prop:"is_white",
        label: "是否為白字"
      },

    ]

    const getList = async () => {
      tableData.value = await bannerApi.getBanner()
    }

    const handleAction =({ action, row = null})=>{
      const id = row? row.id : null
      if (action !== 'delete') {
        const headerTitle = (action === 'edit') ? `編輯封面 - #${id}` : '新增封面' 

        const settings = {
          component: 'EditBanner',
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
        const deleteApi = bannerApi.deleteBanner
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
      searchBlock,
      view,
      tableHeight,
      columnSetting,
      tableData,
      handleAction
    }
  }
}
</script>