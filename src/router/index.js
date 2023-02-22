import { createWebHistory, createRouter } from 'vue-router'
import { Index, Login, Work, Tecnic, Notes, Test } from '@v'
import Backstage from '../backstage'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/tecnic',
    name: 'Tecnic',
    component: Tecnic,
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Backstage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
