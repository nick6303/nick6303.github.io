import { nextTick } from 'vue'


// import Vue from 'vue'
const ADD_PANEL = 'ADD_PANEL'
const HIDE_PANEL = 'HIDE_PANEL'
const CLOSE_PANEL ='CLOSE_PANEL'
const CLOSE_HIDDEN_PANELS ='CLOSE_HIDDEN_PANELS'
const SET_PANEL_COMPONENTS = 'SET_PANEL_COMPONENTS'


function convertCssUnit({ width, height }) {
  const {
    innerWidth,
    innerHeight,

  } = window

  const fontSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size').replace('px', '')
  const arr = [width, height]
  const tmp = []
  arr.forEach((item, index) => {
    const unit = item.replace(/\d/g, '')
    const num = item.replace(/\D/g, '')
    const percent = /vh|vw|%/
    const font = /em|rem/
    let px = num
    switch (true) {
      case (percent.test(item)):
        px = (num * innerWidth) / 100
        if (unit === 'vh' || index === 1) {
          px = (num * innerHeight) / 100
        }
        break
      case (font.test(item)):
        px = num * fontSize
        break
      default:
        break
    }
    tmp.push(px)
  })
  return {
    width: Number(tmp[0]),
    height: Number(tmp[1]) + 50,
  }
}


/** 當 panel 預設 寬度/高度 + 10% 小於 window 寬/高時，
 *  panel 以最大化開啟
 */
function checkSize({ width, height }) {
  const {
    innerWidth,
    innerHeight,
  } = window
  const wGap = (width * 10) / 100
  const hGap = (height * 10) / 100

  return width + wGap > innerWidth || height + hGap > innerHeight
}

const state = {
  panels: [],
}

const mutations = {
  [ADD_PANEL]:(state, panelOptions)=>{
    const {
      component,
      id,
      props,
      events,
      options,
      isMaximizeControlHidden,
      storeDispatch,
    } = panelOptions
    // 檢查是否存在 panel
    const panelIndex = state.panels.findIndex(panel => {
      return (panel.component === component && panel.id === id)
    })
    // 已存在不再創建
    if (panelIndex === -1) {
      const customizedControls = [
        {
          html: '<span class="fa fa-window-maximize" style="color: #fff;font-size: 16px"></span>',
          name: 'max',
          position: 4,
          handler(panel) {
            panel.maximize()
          },
        },
        {
          html: '<span class="fa fa-minus" style="color: #fff;font-size: 16px"></span>',
          name: 'min',
          position: 2,
          handler(panel) {
            panel.minimize()
          },
        },
      ]
      if (isMaximizeControlHidden) {
        customizedControls[0].html = '<span class="fa fa-window-maximize" style="display: none"></span>'
      }

      const normalSize = convertCssUnit(options.contentSize)

      const Newpanel = {
        component,
        id,
        props, // 傳入的參數
        events, // 要將更新的參數 emit 回父層要靠這邊的 events
        show: true,

        options: {
          closeOnEscape: true,
          theme: {
            bgPanel: options.bgPanel ? options.bgPanel : '#373f61',
            bgContent: '#fff',
            colorHeader: '#fff',
            colorContent: '#000',
          },
          headerTitle: options.headerTitle,
          container: 'window',
          position: {
            my: 'center',
            at: 'center',
            offsetX: state.panels.length ? (state.panels.length * 20) : 0,
            offsetY: state.panels.length ? (state.panels.length * 20) : 0,
          },
          headerControls: {
            maximize: 'remove',
            minimize: 'remove',
            smallify: 'remove',
            add: customizedControls,
          },
          contentSize: options.contentSize,
          maximizedMargin: 0,
          contentOverflow: 'hidden hidden',
          dragit: {
            containment: [0],
          },
          resizeit: {
            disable: true,
            handles: 'n, e, s, w, ne, se, sw, nw',
            minWidth: 240,
            minHeight: 300,
          },
          onfronted() {
            /**
             *  feature: improve MembersChoose panel UX
             *  當有 MembersChoose panel 開啟時，點擊到其他
             *  panel 時，會關閉 MembersChoose panel。
             */
            if (component === 'MembersChoose') return
            state.panels.forEach(async panel => {
              if (panel.component === 'MembersChoose') {
                await storeDispatch('closePanel', {
                  component: 'MembersChoose',
                  id: panel.id,
                })
              }
            })
          },
          onstatuschange(panel,) {
            switch (this.status) {
              case 'maximized':
                panel.setControlStatus('max', 'hide')
                break
              case 'minimized':
                panel.setControlStatus('min', 'hide')
                panel.setControlStatus('normalize', 'enable')
                break
              default:
                break
            }
          },
          onbeforenormalize(panel) {
            // 處理 window 太小時，不回到 normalize 大小
            if (checkSize(normalSize)) {
              panel.maximize()
              panel.setControlStatus('normalize', 'disable')
              return false
            }
            return true
          },
          onwindowresize: panel => {
            if (panel.status === 'maximized') {
              panel.maximize()
            }
          },
          callback(panel) {
            if (checkSize(normalSize)) {
              panel.maximize()
              panel.setControlStatus('normalize', 'disable')
            }
          },
        },
      }
      state.panels.push(Newpanel)
    }

  },
  [HIDE_PANEL]:()=>{

  },
  [CLOSE_PANEL]: (state, panelIndex) => {
    state.panels.splice(panelIndex, 1)
  },
  [CLOSE_HIDDEN_PANELS]:()=>{

  },
  [SET_PANEL_COMPONENTS](state, availablePanels) {
    state.availablePanels = availablePanels
  },
}

const actions = {
  addPanel({ dispatch, commit }, {
    settings,
    props = {},
    events = null,
  }) {

    const propInject = {
      parent: window.location.pathname.replace('/', ''),
      ...props,
    }

    const {
      bgPanel,
      headerTitle,
      contentSize,
      component,
      id,
      isMaximizeControlHidden,
    } = settings

    const size = {
      XS: { width: '380px', height: '140px' },
      S: { width: '770px', height: '140px' },
      M: { width: '770px', height: '280px' },
      L: { width: '960px', height: '470px' },
      XL: { width: '960px',  height: '600px' },
    }

    const panelOptions = {
      options: {
        bgPanel,
        headerTitle,
        contentSize: size[contentSize] || contentSize || {
          width: '960px',
          height: '470px',
        },
      },
      component,
      id,
      props: propInject,
      events,
      isMaximizeControlHidden,
      storeDispatch: dispatch,
    }
    commit(ADD_PANEL, panelOptions)
  },
  async closePanel({ commit }, payload) {
    const panelIndex = state.panels.findIndex(panel => {
      return (panel.component === payload.component && panel.id === payload.id)
    })
    if (panelIndex !== -1) {
      // 受限於原生 vue js panel 在改變 visible 時, watch 不到屬性值
      // 將強制異步以抓取到 visible 值
      await nextTick()
      commit(CLOSE_PANEL, panelIndex)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}