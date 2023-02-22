import { createStore } from 'vuex'
import user from './module/user'
import tabs from './module/tabs'
import panels from './module/panels'
import menu from './module/menu'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    tabs,
    panels,
    menu
  }
})