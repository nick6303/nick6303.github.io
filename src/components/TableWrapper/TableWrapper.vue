<template lang="pug">
#tableWrapper
  el-table.main-table(
    ref="elTable"
    :data="tableData"
    :max-height="tableHeight"
    border
  )
    el-table-column(
      v-for="(setting, i) in columnSetting"
      :key="setting.prop"
      :prop="setting.prop"
      :label="setting.label"
      :width="setting.width ? setting.width : null"
      :min-width="setting.minWidth ? setting.minWidth : null"
      :fixed="setting.fixed ? setting.fixed : false"
    )
      template(#default="scope")
        RenderJSX(
          v-if="setting.render"
          :render="setting.render"
          :scope="scope"
        )
        span(
          v-else
        ) {{scope.row[setting.prop]}}
</template>

<script>
import { defineComponent } from 'vue'
import RenderJSX from '@c/RenderJSX'

export default defineComponent({
  name:'TableWrapper',
  components:{
    RenderJSX
  },
  props:{
    tableHeight: {
      type: Number,
      default: null,
    },
    tableData:{
      type: Array,
      // default return null會報length of null錯誤
    },
    columnSetting:{
      type: Array,
    }
  },
  setup(){
    
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
#tableWrapper {
  border: 1px solid #EBEEF5;

  
}

.el-table 
  td,th.is-leaf {
    border-bottom: 1px solid #EBEEF5;
  }

.main-table {
  &::v-deep(th),
  &::v-deep(td) {
    text-align: center;
  }
  &::v-deep(th) {
    background-color: #616284;
    color: #fff;
    font-weight: 500;
    height: 36px;
    padding: 0;
  }

  &::v-deep(td) {
    .enable,
    .stopped {
      padding: 0 8px;
      font-size: 12px;
      border-radius: 5px;
      display: inline-block;
    }
    .enable {
      color: #2b8400;
      background-color: #e2f3da;
    }
    .stopped {
      color: #d82f2f;
      background-color: #fef0f0;
    }
  }

  &::v-deep(.el-button--small) {
    padding: 0 0.7rem;
  }

  &::v-deep(.el-rate__icon) {
    margin-right: 0;
  }
}
</style>

