import { createApp } from 'vue'

import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css'
// 使用繁體中文語言包

import '@as/font/allicon/style.css'
import '@css/style.sass'

import './router/navigation'

import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App)

const requireComponent = require.context('@/backstage/panels/', true, /\.vue$/)

requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the Kebab version of the component name
  const componentName = fileName
    // Remove './' from the begin
    .replace(/\.\//, '')
    // Change all '/' to '-'
    .replace(/\//g, '-')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Remove 'common-'
    .replace('common-', '')

  // Globally register the component
  app.component(componentName, componentConfig.default || componentConfig)
})


app.use(ElementPlus).use(router).use(store).mount('#app')
