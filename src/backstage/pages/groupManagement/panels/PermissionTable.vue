<template lang="pug">
.permissionTable
  el-table(
    :data="filteredPermissionData"
    tooltip-effect="dark"
    border
  )
    el-table-column(
      label="功能名稱"
      prop="title"
    )

    el-table-column(
      label="顯示選單"
      prop="isVisible"
    )
      template(#default="scope")
        el-checkbox(
          v-model="scope.row.isVisible"
        )

    el-table-column(
      label="權限設定"
      prop="actions"
    )
      template(#default="scope")
        div
          el-checkbox(
            v-for="action in Object.keys(scope.row.actions)"
            v-model="scope.row.actions[action]"
          ) {{ actionMap[action] }}
    
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PermissionTable',
  props:{
    permissionData:{
      type: Array,
      default: null
    }
  },
  setup(props){
    const actionMap =  {
      admin: '總管理者',
      create: '新增',
      update: '修改',
      delete: '刪除',
      readSingle: '檢視單筆',
      readList: '檢視列表',
    }
    const filteredPermissionData = ref(props.permissionData)
    return {
      filteredPermissionData,
      actionMap
    }
  }
}
</script>