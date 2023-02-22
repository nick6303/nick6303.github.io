import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import router from '@router'

export default function(){
  const store = useStore()

  const tabs = store.state.tabs.tabs
  const getCurrentTab = tabs.find(tab => tab.menuCode === router.currentRoute.value.name)
  const getActions = getCurrentTab ? getCurrentTab.actions : {}

  const checkActions = () => {
    const tmp = []

    // handle if there's no permission setting
    if (!getActions) return tmp
    Object.keys(getActions).forEach(key => {
      const pattern = /create|delete|update/
      if (pattern.test(key) && getActions[key]) {
        if (key === 'update') {
          tmp.push('edit')
          return
        }
        tmp.push(key)
      }
    })
    if (getActions.readSingle) {
      if (getActions.create) {
        tmp.unshift('copy')
      }
      if (!getActions.update) {
        tmp.unshift('view')
      }
    }
    return tmp
  }

  const getTableActions = () => {
    const actionsSeq = ['view', 'copy', 'edit', 'delete']
    const actions = checkActions()
    const permissionActions = actionsSeq.filter(action => {
      return actions.find(el => el === action)
    })

    return permissionActions
  }

  const actionLable = {
    view:'檢視', copy:'複製', edit:'編輯', delete:'刪除'
  }
  
  const functionalCol = {
    mailInfo: {
      btnType: 'primary',
      icon: 'el-icon-message',
    },
    subCategory: {
      btnType: 'info',
      icon: 'el-icon-folder-opened',
    },
    record: {
      btnType: 'primary',
      icon: 'el-icon-document',
    },
    view: {
      btnType: 'primary',
      icon: 'el-icon-view',
    },
    edit: {
      btnType: 'primary',
      icon: 'el-icon-edit',
    },
    copy: {
      btnType: 'warning',
      icon: 'el-icon-document-copy',
    },
    delete: {
      btnType: 'danger',
      icon: 'el-icon-delete',
    },
    deleteRank: {
      btnType: 'danger',
      icon: 'el-icon-delete',
    },
    keywordSequence: {
      btnType: 'success',
      icon: 'el-icon-plus',
    },
    addChild: {
      btnType: 'success',
      icon: 'el-icon-plus',
    },
  }

  const buttonsWidth = ()=> {
    const buttonWidth = 45  // 空按鈕寬度
    const wordsWidth = 12   // 全形文字寬度
    const paddingWidth = 25 // 左右padding寬度
    const actions = getTableActions()
    const buttonCount = actions.length  // 按鈕數量
    const marginRight = (buttonCount - 1) * 10  // margin寬度

    const words = actions.reduce((pre, cur) => { // 按鈕文字數量
      const curWords = actionLable[cur]
      return pre + curWords
    }, '')

    const EN = words.match(/[A-Z,a-z]/g)
    const ENCount = EN ? EN.length : 0

    const CNwidth = (words.length - ENCount) * wordsWidth
    const ENwidth = ENCount * (wordsWidth / 2)
    return buttonCount * buttonWidth + ENwidth + CNwidth + paddingWidth + marginRight
  }

  const setFunctionColumn = (columnSetting, handleAction) => {
    const actions = getTableActions()
    if (actions.length>0) {
      columnSetting.push({
        label: '功能',
        prop: 'func',
        width: buttonsWidth(),
        fixed: 'right',
        render: (h, scope) => {
          const {
            row,
          } = scope
          
          return (
            <div class="btn-wrap">
              {
                actions.map(action => {
                  return (
                    <el-button key={action}
                      size="small" plain
                      icon={functionalCol[action].icon}
                      type={functionalCol[action].btnType}
                      onClick={() => { handleAction({ action, row }) }}
                    >
                      { actionLable[action] }
                    </el-button>
                  )
                })
              }
            </div>
          )
        },
      })
    }
    return columnSetting
  }

  
  const deleteItem = async(id, deleteApi,getList) =>{
    if(window.confirm('確認刪除？')){
      await deleteApi(id)
      getList()
      ElMessage({
        type: 'success',
        message:'刪除成功'
      })
    } else {
        ElMessage({
        type: 'info',
        message:'取消刪除'
      })
    }
  }

  const setTableHeight =(searchBlock, view)=> {
    const searchHeight = searchBlock.offsetHeight
    const viewHeight = view.offsetHeight
    return viewHeight - searchHeight - 20
  }

  return {
    setFunctionColumn,
    deleteItem,
    setTableHeight
  }
}