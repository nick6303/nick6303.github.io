import http from './http'

export default {
  getWork(){
    return http({
      url: '/work',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/work/${id}`,
      method: 'get',
    })
  },
  postWork(data){
    return http({
      url: '/work',
      method: 'post',
      data
    })
  },
  putWork(data,id){
    console.log(data,id)
    return http({
      url: `/work/${id}`,
      method: 'put',
      data
    })
  },
  deleteWork(id) {
    return http({
      url: `/work/${id}`,
      method: 'delete',
    })
  }
}