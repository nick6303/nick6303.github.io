import store from '@/store'
import router from '@router'

let isRegistered = false

export const registerRouter = async () =>{
  isRegistered = true
  try {
    const asyncRoutes = await store.dispatch('menu/generateRoutes')
    router.addRoute(asyncRoutes)
  } catch (error) {
    console.log(error)
  }
}

router.beforeEach(async (to, from, next) => {
  if (to.fullPath.indexOf('/edit') > -1) {
    if (!isRegistered) {
      await registerRouter()
    }
    if (!to.name) {
      next({
        path: to.path,
        query: { ...to.query },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})