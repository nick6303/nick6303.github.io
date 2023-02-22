import api from '@api'

const SET_MENU_LIST = 'SET_MENU_LIST'
const { menuApi } = api

function menuToRoutes (menuList,routes = []){
  if (Array.isArray(menuList)) {
    menuList.forEach(list=>{
      const {path,menuCode,componentPath } = list
      const route = {
        path,
        name: menuCode,
        component: ()=> import(`@/backstage/pages/${componentPath}`)
      }
      routes.push(route)
    })
  }
  return { asyncRoutes: routes }
} 


export default {
  namespaced: true,
  state:{
    menuList:[]
  },
  mutations:{
    [SET_MENU_LIST](state, menuList) {
      state.menuList = menuList
    },
  },
  actions: {
    async generateRoutes({commit}) {
      try{
        const menuList = await menuApi.getMenu()
        commit(SET_MENU_LIST, menuList)
        const { asyncRoutes } = menuToRoutes(menuList)
        const route = {
            path: '/edit',
            name: 'Edit',
            component: ()=> import('@/backstage') ,
            beforeEnter: (to, from, next) => {
              const useToken = localStorage.getItem('userToken')
              if(useToken){
                next()
              } else {
                next('/')
              }
            },
            children: asyncRoutes
            //   {
            //     path: '',
            //     name: 'EditIndex',
            //     component: EditIndex
            //   },
            //   {
            //     path: 'work',
            //     name: 'EditWork',
            //     component: EditWork
            //   },{
            //     path: 'tecnic',
            //     name: 'EditTecnic',
            //     component: EditTecnic
            //   },{
            //     path: 'note',
            //     name: 'EditNote',
            //     component: EditNote
            //   },{
            //     path: 'banner',
            //     name: 'EditBanner',
            //     component: EditBanner
            //   },{
            //     path: 'menu',
            //     name: 'EditMenu',
            //     component: EditMenu
            //   },{
            //     path: 'user',
            //     name: 'EditUser',
            //     component: EditUser
            //   },{
            //     path: 'group',
            //     name: 'EditGroup',
            //     component: EditGroup
            //   },
            // ]
          }
        return route 
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    }
  }
}