const SET_TAB = 'SET_TABS'
const CLOSE_TAB = 'CLOSE_TAB'

export default {
  namespaced: true,
  state:{
    tabs: localStorage.getItem('tabs') ? JSON.parse(localStorage.getItem('tabs')) : []
  },
  mutations:{
    [SET_TAB](state,tab){
      const hasTab = state.tabs.findIndex(el => el.menuCode === tab.menuCode && el.update_time === tab.update_time)
      if (hasTab === -1) {
        state.tabs.push(tab)
        localStorage.setItem('tabs',JSON.stringify(state.tabs))
      }
    },
    [CLOSE_TAB](state,tab){
      const hasTab = state.tabs.findIndex(el => el.menuCode === tab.menuCode && el.update_time === tab.update_time)
      if (hasTab !== -1) {
        state.tabs.splice(hasTab,1)
        localStorage.setItem('tabs',JSON.stringify(state.tabs))
      }
    }
  },
  actions:{
    setTab({ commit }, tab) {
      commit(SET_TAB, tab)
    },
    closeTab({ commit }, tab) {
      commit(CLOSE_TAB, tab)
    },
  }
}