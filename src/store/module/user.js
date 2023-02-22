const SET_USER_TOKEN = 'SET_USER_TOKEN'
export default {
  namespaced: true,
  state: {
    userToken: '',
  },
  mutations: {
    [SET_USER_TOKEN](state,usertoken) {
      localStorage.setItem('userToken',usertoken)
      state.userToken = usertoken
    }
  },
  actions: {
    setUserToken({ commit },usertoken) {
      commit(SET_USER_TOKEN,usertoken)
    }
  },
}