import http from './http'

export default {
  getBanner(){
    return http({
      url: '/banner',
      method: 'get',
    })
  },
  getItemById(id){
    return http({
      url: `/banner/${id}`,
      method: 'get',
    })
  },
  postBanner(data){
    return http({
      url: '/banner',
      method: 'post',
      data
    })
  },
  putBanner(data,id){
    return http({
      url: `/banner/${id}`,
      method: 'put',
      data
    })
  },
  deleteBanner(id) {
    return http({
      url: `/banner/${id}`,
      method: 'delete',
    })
  }
}