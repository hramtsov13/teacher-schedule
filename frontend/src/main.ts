import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import 'virtual:windi.css'

import './plugins/veeValidate'
import * as ElIconModules from '@element-plus/icons-vue'

const pinia = createPinia()

const app = createApp(App)
//  Unified registration Icon Icon
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

app.use(router).use(pinia).use(ElementPlus).mount('#app')
